import {Provider} from "@nestjs/common";
import {Token_DatabaseConnection, Token_IncidentDetailRepository, Token_IncidentYearRepository} from "../../constants";
import {Connection} from "typeorm";
import {IncidentDetail, IncidentYear} from "./incident.entity";

export const incidentProviders: Provider[] = [
    {
        provide: Token_IncidentYearRepository,
        useFactory: (connection: Connection) => connection.getRepository(IncidentYear),
        inject: [Token_DatabaseConnection]
    },
    {
        provide:Token_IncidentDetailRepository,
        useFactory: (connection: Connection) => connection.getRepository(IncidentDetail),
        inject: [Token_DatabaseConnection]
    }
]
