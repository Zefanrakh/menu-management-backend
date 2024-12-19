import { MenuTypeEnum } from '../../shared/enums/menuType.enum';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @ManyToOne(() => Menu, (menu) => menu.id, { onDelete: 'CASCADE' })
  @JoinColumn()
  parent: Menu;

  @Column({
    type: 'enum',
    enum: MenuTypeEnum,
    default: MenuTypeEnum.BRANCH,
  })
  type?: MenuTypeEnum;

  @DeleteDateColumn()
  deleteDate: Date;
}
