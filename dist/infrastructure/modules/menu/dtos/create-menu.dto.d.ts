import { MenuTypeEnum } from 'src/shared/enums/menuType.enum';
export declare class CreateMenuDto {
    name: string;
    parent: number;
    type?: MenuTypeEnum;
}
