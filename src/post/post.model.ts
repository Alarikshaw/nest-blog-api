import { prop } from '@hasezoey/typegoose'

/**
 * 表结构
 */
export class Post{
    @prop()
    title: string;
    @prop()
    content: string;
}


