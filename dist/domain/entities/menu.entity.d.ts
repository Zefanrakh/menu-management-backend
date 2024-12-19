import { MenuTypeEnum } from '../../shared/enums/menuType.enum';
export declare class Menu {
    id: number;
    name: string;
    parent: Menu;
    type?: MenuTypeEnum;
    deleteDate: Date;
}
