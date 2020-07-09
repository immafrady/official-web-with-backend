import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProviders } from "./article.providers";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";

@Module({
    controllers: [ArticleController],
    providers: [ArticleService, ...articleProviders]
})
export class ArticleModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                { path: 'article/list', method: RequestMethod.GET },
                { path: 'article/detail/:id', method: RequestMethod.GET }
            )
            .forRoutes(ArticleController)
    }
}
