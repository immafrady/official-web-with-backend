import { Provider } from "@nestjs/common";
import { Token_BigDataRepository, Token_DatabaseConnection } from "../../constants";
import { Connection } from "typeorm";
import { BigData } from "./big-data.entity";

export const bigDataProviders: Provider[] = [
    {
        provide: Token_BigDataRepository,
        useFactory: (connection: Connection) => connection.getRepository(BigData),
        inject: [Token_DatabaseConnection]
    }
]
