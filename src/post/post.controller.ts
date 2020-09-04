import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './postFinterface';
import { PostModel } from './post.model';
@Controller('posts')
@ApiTags('文章')
export class PostController {
    @Get()
    @ApiOperation({summary: '查询列表'})
    async index() {
        return await PostModel.find()
    }
    /**
     * 创建文章的代码
     * 浏览器当中只能发起get请求，不能直接发起post请求
     * @param Body 参数 由`@Body`取出
     */
    @Post()
    @ApiOperation({summary: '创建'})
    async create(@Body() createPostDto: CreatePostDto) {
        await PostModel.create(createPostDto)
        return {
            success: true
        }
    }
    
    @Get(":id")
    @ApiOperation({summary: '查询详细信息'})
    detail(@Param('id') id: string) {
        return {
            id: id,
            title: '这是详细信息！'
        }
    }

    @Put(':id')
    @ApiOperation({summary: '编辑'})
    update(@Param('id') id: string, @Body() Body: CreatePostDto) {
        return {
            success: true,
            id: id,
            body: Body,
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除'})
    doDelete(@Param('id') id: string) {
        return {
            id: id,
            message: '删除成功！',
            success: true,
        }
    }
}
