import { Module } from '@nestjs/common';
import { BigDataController } from './big-data.controller';
import { BigDataService } from './big-data.service';
import { bigDataProviders } from "./big-data.providers";
import { CronJobService } from './cron-job.service';

@Module({
  controllers: [BigDataController],
  providers: [BigDataService, CronJobService, ...bigDataProviders]
})
export class BigDataModule {}
