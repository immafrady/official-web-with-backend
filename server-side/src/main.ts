import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from "./config";
import { CustomLogger } from './shared/modules/logger/logger.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: false
    });
    app.useLogger(app.get(CustomLogger))
    await app.listen(config.port);
}
bootstrap();
