import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { FindManyOptions } from 'typeorm';
export declare class ListMenuUseCase {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    execute(params?: FindManyOptions<Menu>['where']): Promise<Menu[]>;
}
