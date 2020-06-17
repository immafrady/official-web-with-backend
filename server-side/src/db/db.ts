import { provide, config, logger, EggContextLogger, init, Application } from "midway";
import { LOGGER_SYSTEM, CONFIG_TYPE_ORM, DB_CONNECTION_NAME, SERVICE_DB } from "../inject-token";
import { Connection, createConnection, getConnection, Repository } from "typeorm";
import { ObjectType } from "typeorm/common/ObjectType";
import { IDb } from "../interface";

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

    private connection: Connection = null;

    @init()
    async init() {
        if (this.connection instanceof Connection) {
            if (!this.connection.isConnected) {
                await this.connection.connect()
            }
        } else {
            this.connection = getConnection(DB_CONNECTION_NAME)
            await this.connection.connect()
        }
    }

    getConnection(): Connection {
        return this.connection
    }
    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
        return this.connection.getRepository(entity)
    }
}
