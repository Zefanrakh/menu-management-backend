"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenuUseCase = void 0;
const menu_entity_1 = require("../../../domain/entities/menu.entity");
class CreateMenuUseCase {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async execute(createAdminDto) {
        const menu = new menu_entity_1.Menu();
        Object.assign(menu, createAdminDto);
        return await this.menuRepository.save(menu);
    }
}
exports.CreateMenuUseCase = CreateMenuUseCase;
//# sourceMappingURL=create-menu.use-case.js.map