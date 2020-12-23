import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './../typeof/articleInterface';

@Controller('posts')
@ApiTags('文章')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示文章列表' })
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  create(@Body() body: CreatePostDto) {
    return body;
  }

  @Get(':id')
  @ApiOperation({ summary: '显示文章具体信息' })
  detail(@Param('id') id: string) {
    return {
      id: id,
      title: 'title',
      content: '文章具体内容',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑文字' })
  update() {
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  remove() {
    return {
      success: true,
    };
  }
}
@Controller('admin')
@ApiTags('管理系统api')
export class adminController {
  @Get()
  @ApiOperation({ summary: '显示文章列表' })
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  create(@Body() body: CreatePostDto) {
    return body;
  }

  @Get(':id')
  @ApiOperation({ summary: '显示文章具体信息' })
  detail(@Param('id') id: string) {
    return {
      id: id,
      title: 'title',
      content: '文章具体内容',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑文字' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  remove(@Param('id') id: string) {
    return {
      success: true,
    };
  }
}
