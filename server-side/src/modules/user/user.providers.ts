import { Provider } from '@nestjs/common';
import { Token_DatabaseConnection, Token_UserRepository } from '../../constants';
import { Connection } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
    <Provider>{
        provide: Token_UserRepository,
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: [Token_DatabaseConnection]
    }
];
