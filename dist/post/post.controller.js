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
let PostController = class PostController {
    index() {
        return [];
    }
    create(Body) {
        return Body;
    }
    detail() {
        return {
            id: 1,
            title: '123123'
        };
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '查询列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "index", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '创建' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postFinterface_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "create", null);
__decorate([
    common_1.Get(":id"),
    swagger_1.ApiOperation({ summary: '查询详细信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "detail", null);
PostController = __decorate([
    common_1.Controller('posts'),
    swagger_1.ApiTags('文章')
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map