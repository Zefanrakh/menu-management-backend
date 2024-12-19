import { CreateMenuDto } from './dtos/create-menu.dto';
import { UpdateMenuDto } from './dtos/update-menu.dto';
import { menuService } from 'src/application/services/menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: menuService);
    create(createMenuDto: CreateMenuDto): Promise<import("../../../domain/entities/menu.entity").Menu>;
    findAll(): Promise<import("../../../domain/entities/menu.entity").Menu[]>;
    findOne(id: number): Promise<import("../../../domain/entities/menu.entity").Menu>;
    update(id: number, updateMenuDto: UpdateMenuDto): Promise<import("../../../domain/entities/menu.entity").Menu>;
    remove(id: number): Promise<void>;
}
