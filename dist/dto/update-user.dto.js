"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserBodyValidation = void 0;
const express_validator_1 = require("express-validator");
const validations_1 = require("../helpers/validations");
exports.updateUserBodyValidation = [
    (0, express_validator_1.param)('id', 'No es un ID válido').notEmpty().isNumeric()
        .custom((id) => (0, validations_1.existeUsuarioID)(+id)),
    (0, express_validator_1.body)('nombre', 'El nombre es inválido').isAlpha(),
    (0, express_validator_1.body)('email', 'El correo es inválido').isEmail(),
    (0, express_validator_1.body)('password', 'La contraseña no cumple con los requerimientos').isStrongPassword(),
    (0, express_validator_1.body)('role', 'El rol es inválido').optional().custom(validations_1.existeRole)
];
//# sourceMappingURL=update-user.dto.js.map