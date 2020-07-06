import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SystemController } from './system.controller';
import { AuthMiddleware } from '../../shared/auth.middleware';

@Module({
  controllers: [SystemController]
})
export class SystemModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes(SystemController)
  }

}
