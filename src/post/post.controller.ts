import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './postFinterface';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
@Controller('posts')
@ApiTags('文章')
export class PostController {
    // 依赖注入
    constructor(
        @InjectModel(PostSchema) private readonly postModel
    ) {}
    @Get()
    @ApiOperation({summary: '查询列表'})
    async index() {
        return await this.postModel.find()
    }
    /**
     * 创建文章的代码
     * 浏览器当中只能发起get请求，不能直接发起post请求
     * @param Body 参数 由`@Body`取出
     */
    @Post()
    @ApiOperation({summary: '创建'})
    async create(@Body() createPostDto: CreatePostDto) {
        await this.postModel.create(createPostDto)
        return {
            success: true
        }
    }
    
    @Get(":id")
    @ApiOperation({summary: '查询详细信息'})
    async detail(@Param('id') id: String) {
        return await this.postModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({summary: '编辑'})
    async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
        await this.postModel.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true,
            id: id,
            body: updatePostDto,
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除'})
    async doDelete(@Param('id') id: string) {
        await this.postModel.findByIdAndDelete(id)
        return {
            id: id,
            message: '删除成功！',
            success: true,
        }
    }
}
