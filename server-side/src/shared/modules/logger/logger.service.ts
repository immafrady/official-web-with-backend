import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger, format, LogEntry } from 'winston';
const { label } = format;


@Injectable()
export class CustomLogger implements LoggerService {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger
    ) {
        console.log('logger init -- need to be deleted')
    }

    pipe(level: string, message: any, context?: string, trace?: string) {
        let info: LogEntry= {
            level,
            message
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

    http() {

    }

}
