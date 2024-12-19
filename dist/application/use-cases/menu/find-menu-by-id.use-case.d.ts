import { MenuRepository } from 'src/domain/repositories/menu.repository';
export declare class FindMenuByIdUseCase {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    execute(id: number): Promise<import("../../../domain/entities/menu.entity").Menu>;
}
