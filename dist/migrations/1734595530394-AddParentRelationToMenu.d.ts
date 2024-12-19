import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddParentRelationToMenu1734595530394 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
