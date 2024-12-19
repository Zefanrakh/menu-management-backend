import { FindManyOptions } from 'typeorm';
import { Menu } from '../entities/menu.entity';

export abstract class MenuRepository {
  abstract save(menu: Menu): Promise<Menu>;
  abstract findById(id: number): Promise<Menu | null>;
  abstract findAll(params?: FindManyOptions<Menu>['where']): Promise<Menu[]>;
  abstract softDelete(id: number): Promise<void>;
}
