import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { SystemModule } from './modules/system/system.module';
import { ArticleModule } from "./modules/article/article.module";

@Module({
    imports: [UserModule, SystemModule, DatabaseModule, ArticleModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
