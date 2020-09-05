import { CreatePostDto } from './postFinterface';
export declare class PostController {
    private readonly postModel;
    constructor(postModel: any);
    index(): Promise<any>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: String): Promise<any>;
    update(id: string, updatePostDto: CreatePostDto): Promise<{
        success: boolean;
        id: string;
        body: CreatePostDto;
    }>;
    doDelete(id: string): Promise<{
        id: string;
        message: string;
        success: boolean;
    }>;
}
