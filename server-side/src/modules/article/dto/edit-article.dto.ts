import { IArticleModifyOptions } from "libs/request/article";
import { CreateArticleDto } from "./create-article.dto";
// import { PartialType } from "@nestjs/swagger";

export class EditArticleDto extends CreateArticleDto implements IArticleModifyOptions {}

// 万一是部分可选的更新，使用下面的
// export class EditArticleDto extends PartialType(CreateArticleDto) implements IArticleModifyOptions {}
