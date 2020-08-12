import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { jobProviders } from "./job.provider";
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { AuthMiddleware } from '../../shared/middlewares/auth.middleware';

@Module({
    providers: [
        ...jobProviders,
        JobService
    ],
    controllers: [JobController]
})
export class JobModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(AuthMiddleware)
            .forRoutes(JobController);
    }
}
