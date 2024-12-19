import { MenuRepository } from 'src/domain/repositories/menu.repository';
export declare class DeleteMenuUseCase {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    execute(id: number): Promise<void>;
}
