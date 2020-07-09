import defaultConfig from './default.config';
import { Config_Typeorm } from '../constants';
import { ConnectionOptions } from 'typeorm';

// 生产配置
export default {
    ...defaultConfig,
    [Config_Typeorm]: <ConnectionOptions>{
        type: 'mysql',
        host: 'fradyspace.com',
        port: 3306,
        database: 'official_web',
        username: 'frady',
        password: 'root',
        // synchronize: true, // 每次启动都会覆盖数据库，生产勿用
        entities: [__dirname + '/../**/*.entity.{ts,js}']
    },
    port: 7002
};
