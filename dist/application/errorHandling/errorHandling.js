"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const common_1 = require("@nestjs/common");
const handleError = (e) => {
    if (e instanceof common_1.HttpException) {
        throw e;
    }
    else {
        throw new common_1.HttpException('Unexpected error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.handleError = handleError;
//# sourceMappingURL=errorHandling.js.map