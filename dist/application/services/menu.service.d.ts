import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { UpdateMenuDto } from 'src/infrastructure/modules/menu/dtos/update-menu.dto';
import { CreateMenuDto } from 'src/infrastructure/modules/menu/dtos/create-menu.dto';
export declare class menuService {
    private readonly menuRepository;
    private readonly createMenuUseCase;
    private readonly updateMenuUseCase;
    private readonly listMenuUseCase;
    private readonly findMenuByIdUseCase;
    private readonly deleteMenuUseCase;
    constructor(menuRepository: MenuRepository);
    createMenu(createMenuDto: CreateMenuDto): Promise<Menu>;
    updateMenu(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu>;
    listMenus(): Promise<Menu[]>;
    findMenuById(id: number): Promise<Menu | null>;
    deleteMenu(id: number): Promise<void>;
}
