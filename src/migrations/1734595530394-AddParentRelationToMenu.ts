import { MigrationInterface, QueryRunner } from "typeorm";

export class AddParentRelationToMenu1734595530394 implements MigrationInterface {
    name = 'AddParentRelationToMenu1734595530394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Hapus indeks jika ada
        await queryRunner.query(`
            SELECT COUNT(1)
            FROM INFORMATION_SCHEMA.STATISTICS
            WHERE TABLE_NAME = 'menus' AND INDEX_NAME = 'REL_8523e13f1ba719e16eb474657e'
        `).then(async (result) => {
            if (result[0]['COUNT(1)'] > 0) {
                await queryRunner.query(`DROP INDEX \`REL_8523e13f1ba719e16eb474657e\` ON \`menus\``);
            }
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Tambahkan kembali indeks jika diperlukan
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_8523e13f1ba719e16eb474657e\` ON \`menus\` (\`parentId\`)`);
    }
}
