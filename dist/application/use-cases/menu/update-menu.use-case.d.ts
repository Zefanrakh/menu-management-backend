import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { UpdateMenuDto } from 'src/infrastructure/modules/menu/dtos/update-menu.dto';
export declare class UpdateMenuUseCase {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    execute(id: number, updateMenuDto: UpdateMenuDto): Promise<import("../../../domain/entities/menu.entity").Menu>;
}
