import { EggAppInfo } from "midway";
import { CONFIG_TYPE_ORM, DB_CONNECTION_NAME } from "../inject-token";
import { ConnectionOptions } from "typeorm";
import { DefaultConfig } from "./config.default";

export default (app: EggAppInfo) => {
    const config: DefaultConfig = {}
    config[CONFIG_TYPE_ORM] = <ConnectionOptions>{
        // todo 上生产时配置
        name: DB_CONNECTION_NAME,
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'official_web',
        username: 'root',
        password: 'password',
        synchronize: true, // 每次启动都会覆盖数据库，生产勿用
        entities: [app.baseDir + '/db/entities/*.{ts,js}']
    }
    return config
}
