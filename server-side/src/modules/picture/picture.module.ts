import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PictureController } from './picture.controller';
import { pictureProviders } from './picture.provider';
import { PictureService } from './picture.service';
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
@Module({
  controllers: [PictureController],
  providers: [...pictureProviders, PictureService]
})
export class PictureModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware)
        .forRoutes(PictureController)
  }
}
