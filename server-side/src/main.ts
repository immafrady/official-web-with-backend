import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseResponseErrorFilter } from './shared/filters/base-response-error.filter';
import { CommonErrorInterceptor } from './shared/interceptors/common-error.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new CommonErrorInterceptor()) // 把未知错误转化为业务异常
    app.useGlobalFilters(new BaseResponseErrorFilter()) // 统一处理业务异常
    await app.listen(3000);
}
bootstrap();
