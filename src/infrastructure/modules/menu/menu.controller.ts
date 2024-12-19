import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateMenuDto } from './dtos/create-menu.dto';
import { UpdateMenuDto } from './dtos/update-menu.dto';
import { menuService } from 'src/application/services/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: menuService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.createMenu(createMenuDto);
  }

  @Get()
  async findAll() {
    return this.menuService.listMenus();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.menuService.findMenuById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateMenu(id, updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.menuService.deleteMenu(id);
  }
}
