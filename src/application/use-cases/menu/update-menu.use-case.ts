import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { UpdateMenuDto } from 'src/infrastructure/modules/menu/dtos/update-menu.dto';

export class UpdateMenuUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(id: number, updateMenuDto: UpdateMenuDto) {
    const menu = await this.menuRepository.findById(id);
    if (!menu) {
      throw new Error('Menu not found');
    }
    Object.assign(menu, updateMenuDto);
    return this.menuRepository.save(menu);
  }
}
