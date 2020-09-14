import { Module } from '@nestjs/common';
import { CustomLogger } from './custom-logger.service';
import { SystemLogger } from './system-logger.service';

@Module({
    providers: [CustomLogger, SystemLogger],
    exports: [CustomLogger, SystemLogger]
})
export class LoggerModule {}
