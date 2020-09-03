import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({description: '标题'})
    title: string;
    @ApiProperty({description: '详情'})
    content: string;
}