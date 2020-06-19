import { EggAppInfo } from "midway";
import { DefaultConfig } from "./config.default";
import { CONFIG_TYPE_ORM, DB_CONNECTION_NAME } from "../inject-token";
import { ConnectionOptions } from "typeorm";


export default (app: EggAppInfo) => {
  const config: DefaultConfig = {}
  config.development = {
    watchDirs: [
      'app',
      'db',
      'lib',
      'service',
      'config',
      'interface',
      'utils',
      'app.ts',
      'agent.ts',
      'interface.ts',
    ],
    overrideDefault: true,
  }


  config[CONFIG_TYPE_ORM] = <ConnectionOptions>{
    name: DB_CONNECTION_NAME,
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'official_web',
    username: 'root',
    password: 'password',
    timezone: '+8:00',
    synchronize: true, // 每次启动都会覆盖数据库，生产勿用
    entities: [app.baseDir + '/db/entities/*.{ts,js}']
  }

  return config
}
