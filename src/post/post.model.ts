import { prop, getModelForClass } from '@hasezoey/typegoose'

/**
 * 表结构
 */
export class Post{
    @prop()
    title: string;
    @prop()
    content: string;
}

/**
 * 模型
 */
export const PostModel = getModelForClass(Post)
