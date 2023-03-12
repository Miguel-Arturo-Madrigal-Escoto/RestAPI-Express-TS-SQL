"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserValidation = void 0;
const express_validator_1 = require("express-validator");
const validations_1 = require("../helpers/validations");
exports.deleteUserValidation = [
    (0, express_validator_1.param)('id', 'No es un ID válido').notEmpty().isNumeric()
        .custom((id) => (0, validations_1.existeUsuarioID)(+id)),
];
//# sourceMappingURL=delete-user.dto.js.map