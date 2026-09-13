import { Injectable } from '@nestjs/common';
import { CreateCheckinDto } from './dto/create-checkin.dto.js';
import { UpdateCheckinDto } from './dto/update-checkin.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import Checkin from './entities/checkin.entity.js';
import { Repository } from 'typeorm';
import { ECheckInStatus } from './enums/echeckin-status.enum.js';

let number = 0;

@Injectable()
export class CheckinService {
  constructor(
    @InjectRepository(Checkin)
    private readonly checkinRepository: Repository<Checkin>,
  ) {}

  async create(createCheckinDto: CreateCheckinDto) {
    try {
      const prefix = createCheckinDto.priority[0].toUpperCase();

      number++;

      const code = `${prefix}${number.toString().padStart(3, '0')}`;

      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

      const checkin = this.checkinRepository.create({
        code,
        expiresAt,
        status: ECheckInStatus.WAITING,
        priority: createCheckinDto.priority,
      });

      this.checkinRepository.save(checkin);

      const { id, createdAt, ...check } = checkin;

      return check;
    } catch (error) {
      return console.log(error);
    }
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
