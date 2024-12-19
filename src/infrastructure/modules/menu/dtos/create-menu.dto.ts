import { MenuTypeEnum } from 'src/shared/enums/menuType.enum';

export class CreateMenuDto {
  name: string;
  parent: number;
  type?: MenuTypeEnum;
}
