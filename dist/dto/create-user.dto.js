"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserBodyValidation = void 0;
const express_validator_1 = require("express-validator");
const validations_1 = require("../helpers/validations");
exports.createUserBodyValidation = [
    (0, express_validator_1.body)('email', 'El correo es inválido').isEmail()
        .custom(validations_1.existeEmail),
    (0, express_validator_1.body)('password', 'La contraseña no cumple con los requerimientos').isStrongPassword(),
    // body('role', 'El rol es inválido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    (0, express_validator_1.body)('role', 'El rol es inválido').custom(validations_1.existeRole)
];
//# sourceMappingURL=create-user.dto.js.map