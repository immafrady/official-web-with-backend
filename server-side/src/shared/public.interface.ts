import { FindConditions, ObjectLiteral } from "typeorm";

export type TypeOrmFindWhere<T> = FindConditions<T>[] | FindConditions<T> | ObjectLiteral | string
