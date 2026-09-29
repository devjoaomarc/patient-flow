import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CheckinService } from './checkin.service.js';
import { CheckinController } from './checkin.controller.js';
import Checkin from './entities/checkin.entity.js';

import { QueueModule } from '../queue/queue.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Checkin]), QueueModule],
  controllers: [CheckinController],
  providers: [CheckinService],
})
export class CheckinModule {}
