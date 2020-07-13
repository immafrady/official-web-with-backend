import { Injectable, LoggerService } from "@nestjs/common";
import { Logger as WinstonLogger, createLogger, format, transports } from "winston";
import { utilities as nestWinstonModuleUtilities } from "nest-winston";
import * as DailyRotateFile from "winston-daily-rotate-file";
import { config } from "../../../config";
const { nestLike } = nestWinstonModuleUtilities.format;
const { combine, timestamp, uncolorize } = format;
const { Console } = transports;


@Injectable()
export class SystemLogger implements LoggerService{
    private logger: WinstonLogger;
    constructor() {
        this.logger = createLogger({
            transports: [
                new DailyRotateFile({
                    filename: 'system-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxSize: '20m',
                    maxFiles: '30d',
                    dirname: config.logRoot,
                    format: combine(
                        timestamp(),
                        nestLike(config.appName),
                        uncolorize()
                    )
                }),
                new Console({
                    format: combine(
                        timestamp(),
                        nestLike(config.appName)
                    )
                })
            ]
        });
    }

    debug(message: any, context?: string): any {
        this.logger.debug({
            message,
            context
        });
    }

    error(message: any, trace?: string, context?: string): any {
        this.logger.error({
            message,
            trace,
            context
        });
    }

    log(message: any, context?: string): any {
        this.logger.info({
            message,
            context
        });
    }

    verbose(message: any, context?: string): any {
        this.logger.verbose({
            message,
            context
        });
    }

    warn(message: any, context?: string): any {
        this.logger.warn({
            message,
            context
        });
    }

}
