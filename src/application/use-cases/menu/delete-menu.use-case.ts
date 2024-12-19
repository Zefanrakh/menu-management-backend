import { MenuRepository } from 'src/domain/repositories/menu.repository';

export class DeleteMenuUseCase {
  constructor(private readonly menuRepository: MenuRepository) {}

  async execute(id: number) {
    const admin = await this.menuRepository.findById(id);
    if (!admin) {
      throw new Error('Menu not found');
    }
    await this.menuRepository.softDelete(id);
  }
}
