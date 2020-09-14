import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from "./config";
import { SystemLogger } from "./global/logger/system-logger.service";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { checkIsProd } from "./utils/check-is-prod.util";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: false
    });
    app.useLogger(app.get(SystemLogger));

    if (!checkIsProd()) {
        const options = new DocumentBuilder()
            .setTitle('官网')
            .setDescription('官网API接口示例')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api', app, document);
    }


    await app.listen(config.port);
}
bootstrap();
