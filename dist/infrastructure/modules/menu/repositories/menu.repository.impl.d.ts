import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { FindManyOptions, Repository } from 'typeorm';
export declare class MenuRepositoryImpl implements MenuRepository {
    private readonly repo;
    constructor(repo: Repository<Menu>);
    save(menu: Menu): Promise<Menu>;
    findById(id: number): Promise<Menu | null>;
    findAll(params?: FindManyOptions<Menu>['where']): Promise<Menu[]>;
    softDelete(id: number): Promise<void>;
}
