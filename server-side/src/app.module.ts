import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/modules/database/database.module';
import { SystemModule } from './modules/system/system.module';
import { ArticleModule } from "./modules/article/article.module";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { CommonErrorInterceptor } from './shared/interceptors/common-error.interceptor';
import { LoggerModule } from './shared/modules/logger/logger.module';
import { BaseResponseErrorFilter } from './shared/filters/base-response-error.filter';
import { LoggerInterceptor } from "./shared/interceptors/logger.interceptor";
import { CustomValidationPipe } from "./shared/pipes/custom-validation.pipe";
import { PictureModule } from "./modules/picture/picture.module";

@Module({
    imports: [
        UserModule,
        SystemModule,
        DatabaseModule,
        ArticleModule,
        PictureModule,
        LoggerModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        { provide: APP_INTERCEPTOR, useClass: CommonErrorInterceptor }, // 把未知错误转化为业务异常
        { provide: APP_INTERCEPTOR, useClass: LoggerInterceptor }, // 统一的请求日志拦截
        { provide: APP_FILTER, useClass: BaseResponseErrorFilter }, // 统一处理业务异常
        { provide: APP_PIPE, useClass: CustomValidationPipe }, // 使用接口参数校验
    ],
})
export class AppModule {}
