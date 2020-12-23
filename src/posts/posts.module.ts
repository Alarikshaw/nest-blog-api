import { Module } from '@nestjs/common';
import { PostsController, adminController } from './posts.controller';

@Module({
  controllers: [PostsController, adminController],
})
export class PostsModule {}
