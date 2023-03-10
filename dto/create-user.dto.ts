import { body, ValidationChain } from 'express-validator';
import { existeEmail, existeRole } from '../helpers/validations';

export interface ReqUserBody {
    nombre: string;
    email:  string;
    password: string;
    role: string;
}

export const reqUserBodyValidation: ValidationChain[] = [
    body('nombre', 'El nombre es inválido').isAlpha(),
    body('email', 'El correo es inválido').isEmail()
    .custom(existeEmail),
    body('password', 'La contraseña no cumple con los requerimientos').isStrongPassword(),
    // body('role', 'El rol es inválido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    body('role', 'El rol es inválido').custom(existeRole)
]