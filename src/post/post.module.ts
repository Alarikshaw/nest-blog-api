import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from "./post.model";
@Module({
  imports: [
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostController]
})
export class PostModule {}
