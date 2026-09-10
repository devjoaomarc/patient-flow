import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CheckinModule } from './checkin/checkin.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'pf-server',
    // }),
    CheckinModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
