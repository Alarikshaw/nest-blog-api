import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypegooseModule } from 'nestjs-typegoose';
/**
 * 装饰器（注解）
 */
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/nest-blog-api', {
      useNewUrlParser: true
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
