import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-blog-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('NestJS平台API')
    .setDescription('NestJSDeclare')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(5000);
}
bootstrap();
