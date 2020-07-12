import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/modules/database/database.module';
import { SystemModule } from './modules/system/system.module';
import { ArticleModule } from "./modules/article/article.module";
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CommonErrorInterceptor } from './shared/interceptors/common-error.interceptor';
import { LoggerModule } from './shared/modules/logger/logger.module';
import { config } from './config';
import { BaseResponseErrorFilter } from './shared/filters/base-response-error.filter';
import * as DailyRotateFile from 'winston-daily-rotate-file'

const { combine, timestamp, printf } = format

@Module({
    imports: [
        UserModule,
        SystemModule,
        DatabaseModule,
        ArticleModule,
        LoggerModule,
        WinstonModule.forRoot({
            format: combine(
                timestamp(),
                printf((info) => {
                    return (
                        `
[${info.level}] at ${info.timestamp} -- ${info.label}
${info.message}
                        `
                    )
                })
            ),
            transports: [
                new DailyRotateFile({
                    filename: 'server-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxSize: '20m',
                    maxFiles: '30d',
                    dirname: config.logRoot
                }),
                new transports.Console({
                    handleExceptions: true
                })
            ]
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,
        { provide: APP_INTERCEPTOR, useClass: CommonErrorInterceptor }, // 把未知错误转化为业务异常
        { provide: APP_FILTER, useClass: BaseResponseErrorFilter } // 统一处理业务异常
    ],
})
export class AppModule {}
