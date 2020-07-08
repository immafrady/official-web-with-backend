import devConfig from './config/dev.config';
import prodConfig from './config/prod.config';
import { Config_Typeorm } from './constants';
import { ConnectionOptions } from 'typeorm';

interface Config {
    secret: string;
    expiredIn: string | number;
    registerKey: string;
    [Config_Typeorm]: ConnectionOptions
}

export const config = (function (): Config {
    return (process.env.NODE_ENV === 'production' ? prodConfig : devConfig) as Config;
})();
