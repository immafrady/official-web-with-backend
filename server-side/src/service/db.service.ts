import { provide, config, logger, EggContextLogger, Application } from "midway";
import { LOGGER_SYSTEM, CONFIG_TYPE_ORM, DB_CONNECTION_NAME, SERVICE_DB } from "../inject-token";
import { Connection, createConnection, getConnection, Repository } from "typeorm";
import { ObjectType } from "typeorm/common/ObjectType";
import { IDb } from "../interfaces/db";

@provide(SERVICE_DB)
export class Db implements IDb{
    static createConnection = async (app: Application) => {
        const config = app.getConfig(CONFIG_TYPE_ORM)
        await createConnection(config)
    }

    @config(CONFIG_TYPE_ORM)
    dbConfig;

    @logger(LOGGER_SYSTEM)
    logger: EggContextLogger;

    getConnection(): Connection {
        return getConnection(DB_CONNECTION_NAME)
    }

    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
        const connection = getConnection(DB_CONNECTION_NAME)
        return connection.getRepository(entity)
    }
}
