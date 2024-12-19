"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMenuUseCase = void 0;
class ListMenuUseCase {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    async execute(params = {}) {
        return await this.menuRepository.findAll(params);
    }
}
exports.ListMenuUseCase = ListMenuUseCase;
//# sourceMappingURL=list-menu.use-case.js.map