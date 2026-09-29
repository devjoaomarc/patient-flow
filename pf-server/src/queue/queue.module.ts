import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QueueController } from './queue.controller.js';
import { QueueGateway } from './queue.gateway.js';
import { QueueService } from './queue.service.js';

import Checkin from '../checkin/entities/checkin.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Checkin])],
  controllers: [QueueController],
  exports: [QueueGateway, QueueService],
  providers: [QueueGateway, QueueService],
})
export class QueueModule {}
