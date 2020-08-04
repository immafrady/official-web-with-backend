import { Connection, ObjectType, Repository } from "typeorm";
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';

/**
 * @description Database Service Interface
 */
export interface IDb {
    getConnection(): Connection;
    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity>;
}

export type TypeOrmFindWhere<T> = FindConditions<T>[] | FindConditions<T> | ObjectLiteral | string
