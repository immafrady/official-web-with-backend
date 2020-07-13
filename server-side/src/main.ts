import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from "./config";
import { SystemLogger } from "./shared/modules/logger/system-logger.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: false
    });
    app.useLogger(app.get(SystemLogger));
    await app.listen(config.port);
}
bootstrap();
