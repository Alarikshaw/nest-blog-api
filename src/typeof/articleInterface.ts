import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  id: number | string;
  @ApiProperty({ description: '文章标题' })
  title: string;
  @ApiProperty({ description: '文章内容' })
  content: string;
}
