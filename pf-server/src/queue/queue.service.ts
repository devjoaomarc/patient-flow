import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ECheckInStatus } from '../checkin/enums/echeckin-status.enum.js';
import { EPriority } from '../checkin/enums/epriority.enum.js';
import Checkin from '../checkin/entities/checkin.entity.js';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Checkin)
    private readonly checkinRepository: Repository<Checkin>,
  ) {}

  async getQueueOrder() {
    const tickets = await this.checkinRepository.find({
      where: {
        status: ECheckInStatus.WAITING,
      },
      order: {
        createdAt: 'ASC',
      },
    });

    const age80Plus = tickets.filter(
      (ticket) => ticket.priority === EPriority.AGE_80_PLUS,
    );

    const priority = tickets.filter(
      (ticket) => ticket.priority === EPriority.PRIORITY,
    );

    const normal = tickets.filter(
      (ticket) => ticket.priority === EPriority.NORMAL,
    );

    const queue: Checkin[] = [];

    let priorityIndex = 0;
    let normalIndex = 0;

    for (const ticket of age80Plus) {
      queue.push(ticket);

      if (normal[normalIndex]) {
        queue.push(normal[normalIndex]);
        normalIndex++;
      }

      if (priority[priorityIndex]) {
        queue.push(priority[priorityIndex]);
        priorityIndex++;
      }
    }

    let nextPriority = age80Plus.length === 0;

    while (priorityIndex < priority.length || normalIndex < normal.length) {
      if (nextPriority && priority[priorityIndex]) {
        queue.push(priority[priorityIndex]);
        priorityIndex++;
      } else if (normal[normalIndex]) {
        queue.push(normal[normalIndex]);
        normalIndex++;
      } else if (priority[priorityIndex]) {
        queue.push(priority[priorityIndex]);
        priorityIndex++;
      }

      nextPriority = !nextPriority;
    }

    return queue;
  }

  async updateQueuePositions() {
    const queue = await this.getQueueOrder();

    for (let i = 0; i < queue.length; i++) {
      queue[i].queuePosition = i + 1;

      await this.checkinRepository.save(queue[i]);
    }

    return queue;
  }

  async getWaitingTickets() {
    return this.checkinRepository.find({
      where: {
        status: ECheckInStatus.WAITING,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  // private lastCalledPriority: EPriority | null = null;
  // async getNextTicket() {
  //   const tickets = await this.getWaitingTickets();

  //   const age80plus = tickets.find(
  //     (ticket) => ticket.priority === EPriority.AGE_80_PLUS,
  //   );

  //   if (age80plus) return age80plus;

  //   const priorities = tickets.filter(
  //     (ticket) => ticket.priority === EPriority.PRIORITY,
  //   );

  //   const normals = tickets.filter(
  //     (ticket) => ticket.priority === EPriority.NORMAL,
  //   );

  //   if (this.lastCalledPriority === EPriority.PRIORITY && normals.length > 0) {
  //     return normals;
  //   }
  //   if (this.lastCalledPriority === EPriority.NORMAL && priorities.length > 0) {
  //     return priorities[0];
  //   }

  //   return priorities[0] ?? normals[0] ?? null;
  // }
}
