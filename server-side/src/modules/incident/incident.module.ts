import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {incidentProviders} from "./incident.provider";
import { IncidentService } from './incident.service';
import { IncidentYearController } from './incident.controller';
import {AuthMiddleware} from "../../shared/middlewares/auth.middleware";

@Module({
    providers: [
        ...incidentProviders,
        IncidentService
    ],
    controllers: [IncidentYearController]
})
export class IncidentModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(AuthMiddleware).forRoutes(IncidentYearController)
    }

}
