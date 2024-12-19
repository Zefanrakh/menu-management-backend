import { MenuRepository } from '../../../domain/repositories/menu.repository';
import { CreateMenuDto } from '../../../infrastructure/modules/menu/dtos/create-menu.dto';
import { Menu } from '../../../domain/entities/menu.entity';
export declare class CreateMenuUseCase {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    execute(createAdminDto: CreateMenuDto): Promise<Menu>;
}
