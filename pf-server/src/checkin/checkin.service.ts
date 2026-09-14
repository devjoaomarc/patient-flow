import { Injectable } from '@nestjs/common';
import { CreateCheckinDto } from './dto/create-checkin.dto.js';
import { UpdateCheckinDto } from './dto/update-checkin.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import Checkin from './entities/checkin.entity.js';
import { Between, Like, Repository } from 'typeorm';
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
        status: ECheckInStatus.WAITING,
        priority: createCheckinDto.priority,
      });

      await this.checkinRepository.save(checkin);

      const { id, createdAt, ...check } = checkin;

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
