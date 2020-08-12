import { Provider } from "@nestjs/common";
import { Token_DatabaseConnection, Token_JobDetailRepository, Token_JobTypeRepository } from "../../constants";
import { Connection } from "typeorm";
import { JobDetail, JobType } from "./job.entity";

export const jobProviders: Provider[] = [
    {
        provide: Token_JobTypeRepository,
        useFactory: (connection: Connection) => connection.getRepository(JobType),
        inject: [Token_DatabaseConnection]
    }, {
        provide: Token_JobDetailRepository,
        useFactory: (connection: Connection) => connection.getRepository(JobDetail),
        inject: [Token_DatabaseConnection]
    }
]
