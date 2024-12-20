import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { UpdateMenuDto } from 'src/infrastructure/modules/menu/dtos/update-menu.dto';
import { CreateMenuUseCase } from '../use-cases/menu/create-menu.use-case';
import { UpdateMenuUseCase } from '../use-cases/menu/update-menu.use-case';
import { ListMenuUseCase } from '../use-cases/menu/list-menu.use-case';
import { FindMenuByIdUseCase } from '../use-cases/menu/find-menu-by-id.use-case';
import { DeleteMenuUseCase } from '../use-cases/menu/delete-menu.use-case';
import { CreateMenuDto } from 'src/infrastructure/modules/menu/dtos/create-menu.dto';

@Injectable()
export class menuService {
  private readonly createMenuUseCase: CreateMenuUseCase;
  private readonly updateMenuUseCase: UpdateMenuUseCase;
  private readonly listMenuUseCase: ListMenuUseCase;
  private readonly findMenuByIdUseCase: FindMenuByIdUseCase;
  private readonly deleteMenuUseCase: DeleteMenuUseCase;
  constructor(private readonly menuRepository: MenuRepository) {
    this.createMenuUseCase = new CreateMenuUseCase(this.menuRepository);
    this.updateMenuUseCase = new UpdateMenuUseCase(this.menuRepository);
    this.listMenuUseCase = new ListMenuUseCase(this.menuRepository);
    this.findMenuByIdUseCase = new FindMenuByIdUseCase(this.menuRepository);
    this.deleteMenuUseCase = new DeleteMenuUseCase(this.menuRepository);
  }

  async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.createMenuUseCase.execute(createMenuDto);
  }

  async updateMenu(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    return this.updateMenuUseCase.execute(id, updateMenuDto);
  }

  async listMenus(): Promise<Menu[]> {
    return this.listMenuUseCase.execute();
  }

  async findMenuById(id: number): Promise<Menu | null> {
    return this.findMenuByIdUseCase.execute(id);
  }

  async deleteMenu(id: number): Promise<void> {
    try {
      const menu = await this.menuRepository.findById(id);
      if (!menu) {
        throw new HttpException('Menu not found', HttpStatus.NOT_FOUND);
      }
      if (!menu.parent) {
        throw new HttpException(
          'Cannot delete root menu',
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.deleteMenuUseCase.execute(id);
    } catch (e) {
      throw e;
    }
  }
}
