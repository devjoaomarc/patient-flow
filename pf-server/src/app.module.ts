import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CheckinModule } from './checkin/checkin.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.js';
import { QueueModule } from './queue/queue.module.js';
import { ScheduleModule } from "@nestjs/schedule";

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'pf-server',
    // }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    CheckinModule,
    QueueModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
