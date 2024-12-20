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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const create_menu_dto_1 = require("./dtos/create-menu.dto");
const update_menu_dto_1 = require("./dtos/update-menu.dto");
const menu_service_1 = require("../../../application/services/menu.service");
const errorHandling_1 = require("../../../application/errorHandling/errorHandling");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async create(createMenuDto) {
        try {
            return this.menuService.createMenu(createMenuDto);
        }
        catch (e) {
            (0, errorHandling_1.handleError)(e);
        }
    }
    async findAll() {
        return this.menuService.listMenus();
    }
    async findOne(id) {
        return this.menuService.findMenuById(id);
    }
    async update(id, updateMenuDto) {
        try {
            return this.menuService.updateMenu(id, updateMenuDto);
        }
        catch (e) {
            (0, errorHandling_1.handleError)(e);
        }
    }
    async remove(id) {
        try {
            return this.menuService.deleteMenu(id);
        }
        catch (e) {
            (0, errorHandling_1.handleError)(e);
        }
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_menu_dto_1.UpdateMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "remove", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    __metadata("design:paramtypes", [menu_service_1.menuService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map