import { Between, Like, MoreThan, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCheckinDto } from './dto/create-checkin.dto.js';
import { UpdateCheckinDto } from './dto/update-checkin.dto.js';
import { ValidateCheckinDto } from './dto/validate-checkin.dto.js';

import Checkin from './entities/checkin.entity.js';
import { ECheckInStatus } from './enums/echeckin-status.enum.js';

@Injectable()
export class CheckinService {
  constructor(
    @InjectRepository(Checkin)
    private readonly checkinRepository: Repository<Checkin>,
  ) {}

  async create(createCheckinDto: CreateCheckinDto) {
    try {
      const prefix = createCheckinDto.priority[0].toUpperCase();

      const code = await this.findLastCodeOfToday(prefix);

      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

      const checkin = this.checkinRepository.create({
        code,
        expiresAt,
        status: ECheckInStatus.CREATED,
        priority: createCheckinDto.priority,
      });

      await this.checkinRepository.save(checkin);

      const { id, ...check } = checkin;

      return check;
    } catch (error) {
      return console.log(error);
    }
  }

  async findLastCodeOfToday(prefix: string) {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const lastCodeOfToday = await this.checkinRepository.findOne({
      where: {
        code: Like(`${prefix}%`),
        createdAt: Between(startOfToday, endOfToday),
      },
      order: {
        createdAt: 'DESC',
      },
    });

    if (!lastCodeOfToday) return `${prefix}001`;

    let codeNumber = Number(lastCodeOfToday.code.substring(1));

    codeNumber++;

    const code = `${prefix}${codeNumber.toString().padStart(3, '0')}`;

    return code;
  }

  async validate(validateCheckinDto: ValidateCheckinDto) {
    try {
      const checkin = await this.findOneByCodeAndNotExpired(
        validateCheckinDto.code,
      );

      if (!checkin || checkin.status !== ECheckInStatus.CREATED)
        return {
          success: false,
          message: 'Ticket não encontrado ou expirado.',
        };

      checkin.status = ECheckInStatus.WAITING;

      await this.checkinRepository.save(checkin);

      return { success: true, message: 'Ticket validado com sucesso.' };
    } catch (error) {
      return console.log(error);
    }
  }

  async findOneByCodeAndNotExpired(code: string) {
    return await this.checkinRepository.findOne({
      where: {
        code,
        expiresAt: MoreThan(new Date()),
      },
    });
  }

  findAll() {
    return `This action returns all checkin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkin`;
  }

  update(id: number, updateCheckinDto: UpdateCheckinDto) {
    return `This action updates a #${id} checkin`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkin`;
  }
}
