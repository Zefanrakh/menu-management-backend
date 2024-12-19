import { MenuRepository } from 'src/domain/repositories/menu.repository';

export class FindMenuByIdUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(id: number) {
    return await this.menuRepository.findById(id);
  }
}
