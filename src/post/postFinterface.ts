import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator'

export class CreatePostDto {
    @ApiProperty({description: '标题', example: '文章标题1'})
    @IsNotEmpty({message: '请填写标题'})
    title: string;
    @ApiProperty({description: '详情', example: '文章内容'})
    content: string;
}