import { Provider } from "@nestjs/common";
import { Token_DatabaseConnection, Token_JobDetailRepository, Token_JobDepartmentRepository } from "../../constants";
import { Connection } from "typeorm";
import { JobDetail, JobDepartment } from "./job.entity";

export const jobProviders: Provider[] = [
    {
        provide: Token_JobDepartmentRepository,
        useFactory: (connection: Connection) => connection.getRepository(JobDepartment),
        inject: [Token_DatabaseConnection]
    }, {
        provide: Token_JobDetailRepository,
        useFactory: (connection: Connection) => connection.getRepository(JobDetail),
        inject: [Token_DatabaseConnection]
    }
]
