"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMenuByIdUseCase = void 0;
class FindMenuByIdUseCase {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async execute(id) {
        return await this.menuRepository.findById(id);
    }
}
exports.FindMenuByIdUseCase = FindMenuByIdUseCase;
//# sourceMappingURL=find-menu-by-id.use-case.js.map