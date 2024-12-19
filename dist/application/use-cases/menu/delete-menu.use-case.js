"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuUseCase = void 0;
class DeleteMenuUseCase {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async execute(id) {
        const admin = await this.menuRepository.findById(id);
        if (!admin) {
            throw new Error('Menu not found');
        }
        await this.menuRepository.softDelete(id);
    }
}
exports.DeleteMenuUseCase = DeleteMenuUseCase;
//# sourceMappingURL=delete-menu.use-case.js.map