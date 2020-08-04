import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../config';
import { IJWTSavedInfo } from '../modules/user/user.interface';

export function getDataFromJwt(req: Request): IJWTSavedInfo {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            return jwt.verify(token, config.secret) as IJWTSavedInfo;
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }
}
