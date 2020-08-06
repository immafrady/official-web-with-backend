import { TypeOrmFindWhere } from "../../shared/public.interface";
import { Picture } from "./picture.entity";

export interface IPictureFindManyOptions {
    where?: TypeOrmFindWhere<Picture>;
    select?: (keyof Picture)[]
}
