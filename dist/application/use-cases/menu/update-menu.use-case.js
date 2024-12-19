"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuUseCase = void 0;
class UpdateMenuUseCase {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async execute(id, updateMenuDto) {
        const menu = await this.menuRepository.findById(id);
        if (!menu) {
            throw new Error('Menu not found');
        }
        Object.assign(menu, updateMenuDto);
        return this.menuRepository.save(menu);
    }
}
exports.UpdateMenuUseCase = UpdateMenuUseCase;
//# sourceMappingURL=update-menu.use-case.js.map