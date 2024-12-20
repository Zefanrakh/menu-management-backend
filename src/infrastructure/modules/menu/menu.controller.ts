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
import { handleError } from 'src/application/errorHandling/errorHandling';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: menuService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    try {
      return this.menuService.createMenu(createMenuDto);
    } catch (e) {
      handleError(e);
    }
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
    try {
      return this.menuService.updateMenu(id, updateMenuDto);
    } catch (e) {
      handleError(e);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return this.menuService.deleteMenu(id);
    } catch (e) {
      handleError(e);
    }
  }
}
