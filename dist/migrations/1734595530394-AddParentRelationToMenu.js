"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddParentRelationToMenu1734595530394 = void 0;
class AddParentRelationToMenu1734595530394 {
    constructor() {
        this.name = 'AddParentRelationToMenu1734595530394';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_8523e13f1ba719e16eb474657e\` ON \`menus\` (\`parentId\`)`);
    }
}
exports.AddParentRelationToMenu1734595530394 = AddParentRelationToMenu1734595530394;
//# sourceMappingURL=1734595530394-AddParentRelationToMenu.js.map