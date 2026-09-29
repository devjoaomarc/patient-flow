import { Controller, Get } from '@nestjs/common';
import { QueueService } from './queue.service.js';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get('/waiting')
  findWaiting() {
    return this.queueService.getQueueOrder();
  }
}
