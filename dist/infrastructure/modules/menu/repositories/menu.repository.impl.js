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
exports.MenuRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const menu_entity_1 = require("../../../../domain/entities/menu.entity");
const typeorm_2 = require("typeorm");
let MenuRepositoryImpl = class MenuRepositoryImpl {
    constructor(repo) {
        this.repo = repo;
    }
    async save(menu) {
        return await this.repo.save(menu);
    }
    async findById(id) {
        return await this.repo
            .createQueryBuilder('menu')
            .loadRelationIdAndMap('menu.parent', 'menu.parent')
            .where('menu.id = :id', { id })
            .getOne();
    }
    async findAll(params = {}) {
        return await this.repo
            .createQueryBuilder('menu')
            .loadRelationIdAndMap('menu.parent', 'menu.parent')
            .andWhere(params)
            .getMany();
    }
    async softDelete(id) {
        await this.repo.softDelete(id);
    }
};
exports.MenuRepositoryImpl = MenuRepositoryImpl;
exports.MenuRepositoryImpl = MenuRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuRepositoryImpl);
//# sourceMappingURL=menu.repository.impl.js.map