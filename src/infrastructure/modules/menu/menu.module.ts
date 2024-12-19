import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/domain/entities/menu.entity';
import { menuService } from 'src/application/services/menu.service';
import { MenuRepositoryImpl } from './repositories/menu.repository.impl';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { MenuController } from './menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [
    menuService,
    {
      provide: MenuRepository,
      useClass: MenuRepositoryImpl,
    },
  ],
  exports: [menuService],
})
export class MenuModule {}
