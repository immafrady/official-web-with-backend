/**
 * @description User-Service parameters
 */
import { Connection, ObjectType, Repository } from "typeorm";

export interface IUserOptions {
  id: number;
}

/**
 * @description User-Service response
 */
export interface IUserResult {
  id: number;
  username: string;
  phone: string;
  email?: string;
}

/**
 * @description User-Service abstractions
 */
export interface IUserService {
  getUser(options: IUserOptions): Promise<IUserResult>;
}

/**
 * @description Database Service Interface
 */
export interface IDb {
  getConnection(): Connection;
  getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity>;
}
