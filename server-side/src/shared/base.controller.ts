import { config } from '../config';
import * as jwt from 'jsonwebtoken'

export abstract class BaseController {
    protected getUserInfoFromToken(authorization) {
        if (!authorization) return null;

        const token = authorization.split(' ')[1];
        const decoded: any = jwt.verify(token, config.secret);
        return decoded.id;
    }
}
