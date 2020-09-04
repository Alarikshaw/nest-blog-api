"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const mongoose = require("mongoose");
async function bootstrap() {
    mongoose.connect('mongodb://localhost/nest-blog-api', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('NestJS平台API')
        .setDescription('NestJSDeclare')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map