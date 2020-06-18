import { Connection, ObjectType, Repository } from "typeorm";

/**
 * @description Database Service Interface
 */
export interface IDb {
    getConnection(): Connection;
    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity>;
}
