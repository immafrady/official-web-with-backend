import defaultConfig from './default.config'
import { Config_Typeorm } from '../constants';
import { ConnectionOptions } from 'typeorm';

console.log('dir: ', __dirname)

// 开发配置
export default {
    ...defaultConfig,
    [Config_Typeorm]: <ConnectionOptions>{
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'official_web',
        username: 'root',
        password: 'password',
        // synchronize: true, // 每次启动都会覆盖数据库，生产勿用
        entities: [__dirname + '/../**/*.entity.{ts,js}']
    }
}
