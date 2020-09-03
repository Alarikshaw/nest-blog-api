import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './postFinterface';
@Controller('posts')
@ApiTags('文章')
export class PostController {
    @Get()
    @ApiOperation({summary: '查询列表'})
    index() {
        return []
    }
    /**
     * 创建文章的代码
     * 浏览器当中只能发起get请求，不能直接发起post请求
     * @param Body 参数 由`@Body`取出
     */
    @Post()
    @ApiOperation({summary: '创建'})
    create(@Body() Body: CreatePostDto) {
        return Body
    }
    
    @Get(":id")
    @ApiOperation({summary: '查询详细信息'})
    detail() {
        return {
            id: 1,
            title: '123123'
        }
    }
}
