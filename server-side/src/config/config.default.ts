import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';
import { CONFIG_JWT } from "../inject-token";
import { Options } from "koa-jwt";

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591928908038_4727';

  // add your config here
  config.middleware = [];

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
  config[CONFIG_JWT] = <Options>{
    secret: 'official-web'
  }

  return config;
};
