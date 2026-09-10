import { Module } from '@nestjs/common';
import { CheckinService } from './checkin.service.js';
import { CheckinController } from './checkin.controller.js';

@Module({
  controllers: [CheckinController],
  providers: [CheckinService],
})
export class CheckinModule {}
