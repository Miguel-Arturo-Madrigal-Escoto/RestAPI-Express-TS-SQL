"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
const validations_1 = require("../../helpers/validations");
exports.loginValidation = [
    (0, express_validator_1.body)('correo', 'El correo es obligatorio').isEmail()
        .custom(validations_1.existeUsuario),
    (0, express_validator_1.body)('password', 'La contraseña es obligatoria').notEmpty(),
];
//# sourceMappingURL=login.dto.js.map