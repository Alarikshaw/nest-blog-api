import { CreatePostDto } from './postFinterface';
export declare class PostController {
    index(): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>[]>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): {
        id: string;
        title: string;
    };
    update(id: string, Body: CreatePostDto): {
        success: boolean;
        id: string;
        body: CreatePostDto;
    };
    doDelete(id: string): {
        id: string;
        message: string;
        success: boolean;
    };
}
