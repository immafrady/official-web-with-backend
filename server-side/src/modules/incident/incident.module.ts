import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {incidentProviders} from "./incident.provider";
import { IncidentService } from './incident.service';
import {IncidentController, IncidentDetailController, IncidentYearController} from './incident.controller';
import {AuthMiddleware} from "../../shared/middlewares/auth.middleware";

@Module({
    providers: [
        ...incidentProviders,
        IncidentService
    ],
    controllers: [IncidentYearController, IncidentDetailController, IncidentController]
})
export class IncidentModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(AuthMiddleware).forRoutes(IncidentYearController);
        consumer.apply(AuthMiddleware).forRoutes(IncidentDetailController)
    }


}
