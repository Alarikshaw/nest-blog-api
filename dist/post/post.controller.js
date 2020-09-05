"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const postFinterface_1 = require("./postFinterface");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const post_model_1 = require("./post.model");
let PostController = class PostController {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async index() {
        return await this.postModel.find();
    }
    async create(createPostDto) {
        await this.postModel.create(createPostDto);
        return {
            success: true
        };
    }
    async detail(id) {
        return await this.postModel.findById(id);
    }
    async update(id, updatePostDto) {
        await this.postModel.findByIdAndUpdate(id, updatePostDto);
        return {
            success: true,
            id: id,
            body: updatePostDto,
        };
    }
    async doDelete(id) {
        await this.postModel.findByIdAndDelete(id);
        return {
            id: id,
            message: '删除成功！',
            success: true,
        };
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '查询列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "index", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '创建' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postFinterface_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    common_1.Get(":id"),
    swagger_1.ApiOperation({ summary: '查询详细信息' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "detail", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ summary: '编辑' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, postFinterface_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: '删除' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "doDelete", null);
PostController = __decorate([
    common_1.Controller('posts'),
    swagger_1.ApiTags('文章'),
    __param(0, nestjs_typegoose_1.InjectModel(post_model_1.Post)),
    __metadata("design:paramtypes", [Object])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map