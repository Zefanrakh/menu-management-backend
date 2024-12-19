import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { FindManyOptions } from 'typeorm';

export class ListMenuUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(params: FindManyOptions<Menu>['where'] = {}) {
    return await this.menuRepository.findAll(params);
  }
}
