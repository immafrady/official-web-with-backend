import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';
import { CONFIG_JWT, LOGGER_REQUEST, LOGGER_SYSTEM } from "../inject-token";
import * as path from "path";
import { IJWTConfig } from "../interfaces/config";

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_official_web';

  // add your config here(全局middleware，koa/egg写法)
  config.middleware = ['responseHandler'];

  // cors
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // jwt配置
  config[CONFIG_JWT] = <IJWTConfig>{
    secret: 'official-web'
  }

  config.customLogger = {
    [LOGGER_REQUEST]: {
      file: path.join(`${appInfo.root}/logs/${appInfo.name}/official-web-request.log`)
    },
    [LOGGER_SYSTEM]: {
      file: path.join(`${appInfo.root}/logs/${appInfo.name}/official-web-system.log`)
    }
  }

  return config;
};
