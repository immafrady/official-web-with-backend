import { Inject, Injectable } from '@nestjs/common';
import { Token_UserRepository } from '../../constants';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import * as md5 from 'md5';
import { RegisterDto } from './dto';
import { IJWTSavedInfo } from './user.interface';

@Injectable()
export class UserService {
    constructor(
        @Inject(Token_UserRepository)
        private userRepository: Repository<User>
    ) {}

    // 通过用户ID找用户
    async findById(id: string | number): Promise<User> {
        return this.userRepository.findOne(id);
    }

    // 通过用户名查找用户
    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({
            where: {
                username
            }
        });
    }

    // 新增用户
    async createNewUser(registerDto: RegisterDto): Promise<any> {
        const user = this.userRepository.create(registerDto);
        await this.userRepository.save(user);
        return {};
    }

    // 判断密码是否正确
    checkPasswordEqual(fromDto: string, fromEntity: string): boolean {
        return md5(fromDto) === fromEntity;
    }

    // 生成jwt
    generateJWT(id: string | number): string {
        return jwt.sign(<IJWTSavedInfo>{
            id
        }, config.secret, {
            expiresIn: config.expiredIn
        });
    }
}
