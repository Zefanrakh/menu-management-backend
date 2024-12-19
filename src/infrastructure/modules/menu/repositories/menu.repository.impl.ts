import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from 'src/domain/entities/menu.entity';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class MenuRepositoryImpl implements MenuRepository {
  constructor(
    @InjectRepository(Menu) private readonly repo: Repository<Menu>,
  ) {}

  async save(menu: Menu): Promise<Menu> {
    return await this.repo.save(menu);
  }

  async findById(id: number): Promise<Menu | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async findAll(params: FindManyOptions<Menu>['where'] = {}): Promise<Menu[]> {
    return await this.repo
      .createQueryBuilder('menu')
      .loadRelationIdAndMap('menu.parent', 'menu.parent')
      .andWhere(params)
      .getMany();
  }

  async softDelete(id: number): Promise<void> {
    await this.repo.softDelete(id);
  }
}
