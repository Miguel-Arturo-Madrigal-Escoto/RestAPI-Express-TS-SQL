"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserValidation = void 0;
const express_validator_1 = require("express-validator");
exports.getUserValidation = [
    (0, express_validator_1.query)('limit', 'El limite es inválido').optional().isNumeric(),
    (0, express_validator_1.query)('offset', 'El offset es inválido').optional().isNumeric(),
];
//# sourceMappingURL=get-user.dto.js.map