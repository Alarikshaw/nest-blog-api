import { CreatePostDto } from './postFinterface';
export declare class PostController {
    index(): any[];
    create(Body: CreatePostDto): CreatePostDto;
    detail(): {
        id: number;
        title: string;
    };
}
