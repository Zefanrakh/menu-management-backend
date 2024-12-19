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
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuService = void 0;
const common_1 = require("@nestjs/common");
const menu_repository_1 = require("../../domain/repositories/menu.repository");
const create_menu_use_case_1 = require("../use-cases/menu/create-menu.use-case");
const update_menu_use_case_1 = require("../use-cases/menu/update-menu.use-case");
const list_menu_use_case_1 = require("../use-cases/menu/list-menu.use-case");
const find_menu_by_id_use_case_1 = require("../use-cases/menu/find-menu-by-id.use-case");
const delete_menu_use_case_1 = require("../use-cases/menu/delete-menu.use-case");
let menuService = class menuService {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
        this.createMenuUseCase = new create_menu_use_case_1.CreateMenuUseCase(this.menuRepository);
        this.updateMenuUseCase = new update_menu_use_case_1.UpdateMenuUseCase(this.menuRepository);
        this.listMenuUseCase = new list_menu_use_case_1.ListMenuUseCase(this.menuRepository);
        this.findMenuByIdUseCase = new find_menu_by_id_use_case_1.FindMenuByIdUseCase(this.menuRepository);
        this.deleteMenuUseCase = new delete_menu_use_case_1.DeleteMenuUseCase(this.menuRepository);
    }
    async createMenu(createMenuDto) {
        return this.createMenuUseCase.execute(createMenuDto);
    }
    async updateMenu(id, updateMenuDto) {
        return this.updateMenuUseCase.execute(id, updateMenuDto);
    }
    async listMenus() {
        return this.listMenuUseCase.execute();
    }
    async findMenuById(id) {
        return this.findMenuByIdUseCase.execute(id);
    }
    async deleteMenu(id) {
        const menu = await this.menuRepository.findById(id);
        if (!menu) {
            throw new Error('Menu not found');
        }
        await this.deleteMenuUseCase.execute(id);
    }
};
exports.menuService = menuService;
exports.menuService = menuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menu_repository_1.MenuRepository])
], menuService);
//# sourceMappingURL=menu.service.js.map