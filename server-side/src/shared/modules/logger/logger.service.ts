import { Inject, Injectable, LoggerService } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger, format, LogEntry } from 'winston';
import { Request } from "express";
import { IHttpResponse } from "libs/common";
const { label } = format;

type Level = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'

@Injectable()
export class CustomLogger implements LoggerService {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger
    ) {}

    pipe(level: Level, message: any, context?: string, trace?: string) {
        let info: LogEntry= {
            level,
            message: message.toString()
        }

        if (trace) {
            info.message += '\n\n[trace]'
            info.message += trace
        }

        if (context) {
            const labelFormat = label();
            info = labelFormat.transform(info, {
                label: context
            }) as LogEntry
        }

        this.logger.log(info)
    }

    error(message: any, trace?: string, context?: string): any {
        this.pipe('error', message, context, trace)
    }

    log(message: any, context?: string): any {
        this.pipe('info', message, context)
    }

    debug(message: any, context?: string): any {
        this.pipe('debug', message, context)
    }

    verbose(message: any, context?: string): any {
        this.pipe('verbose', message, context)
    }

    warn(message: any, context?: string): any {
        this.pipe('warn', message, context)
    }

    httpResponse<T>(req: Request, res: IHttpResponse<T>, isError?: boolean) {
        let message = '------------------------------------\n' +
            'Request original url: ' + req.originalUrl + '\n' +
            'Method: ' + req.method + '\n' +
            'IP: ' + req.ip + '\n' +
            'Params: ' + JSON.stringify(req.params) + '\n' +
            'Query: ' + JSON.stringify(req.query) + '\n' +
            'Body: ' + JSON.stringify(req.body) + '\n' +
            '------------------------------------\n' +
            'Response: ' + JSON.stringify(res)

        this.pipe(isError ? 'error' : 'info', message, 'HttpRequest')

    }

}
