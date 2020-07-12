import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { Config_Typeorm, Token_DatabaseConnection } from '../../../constants';
import { createConnection } from 'typeorm';
import { config } from '../../../config';


export const databaseProviders = [
    <Provider>{
        provide: Token_DatabaseConnection,
        useFactory: async () => await createConnection(config[Config_Typeorm])
    }
];
