import { MenuRepository } from '../../../domain/repositories/menu.repository';
import { CreateMenuDto } from '../../../infrastructure/modules/menu/dtos/create-menu.dto';
import { Menu } from '../../../domain/entities/menu.entity';

export class CreateMenuUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(createAdminDto: CreateMenuDto): Promise<Menu> {
    const menu = new Menu();
    Object.assign(menu, createAdminDto);
    return await this.menuRepository.save(menu);
  }
}
