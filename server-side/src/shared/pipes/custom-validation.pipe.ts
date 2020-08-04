import { Injectable, PipeTransform, ValidationPipe } from "@nestjs/common";

@Injectable()
export class CustomValidationPipe extends ValidationPipe implements PipeTransform{
  constructor() {
    super({
      whitelist: true, // 没有加校验装饰器的参数都会被删掉
      transform: true // 自动转换成规定的数据类型
    });
  }
}
