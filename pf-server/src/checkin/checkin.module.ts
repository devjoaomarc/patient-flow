import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CheckinService } from './checkin.service.js';
import { CheckinController } from './checkin.controller.js';
import Checkin from './entities/checkin.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Checkin])],
  controllers: [CheckinController],
  providers: [CheckinService],
})
export class CheckinModule {}
