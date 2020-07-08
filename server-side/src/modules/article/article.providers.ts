import { Provider } from "@nestjs/common";
import { Token_ArticleRepository, Token_DatabaseConnection } from "../../constants";
import { Connection } from "typeorm";
import { Article } from "./article.entity";

export const articleProviders = [
    <Provider>{
        provide: Token_ArticleRepository,
        useFactory: (connection: Connection) => connection.getRepository(Article),
        inject: [Token_DatabaseConnection]
    }
];
