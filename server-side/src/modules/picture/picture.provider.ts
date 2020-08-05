import { Provider } from "@nestjs/common";
import { Token_DatabaseConnection, Token_PictureRepository } from "../../constants";
import { Connection } from "typeorm";
import { Picture } from "./picture.entity";

export const pictureProviders = [
    <Provider>{
        provide: Token_PictureRepository,
        useFactory: (connection: Connection) => connection.getRepository(Picture),
        inject: [Token_DatabaseConnection]
    }
]
