import { body, ValidationChain } from 'express-validator';
import { existeEmail, existeRole } from '../../helpers/validations';

export interface CreateUserBody {
    nombre: string;
    email:  string;
    password: string;
    role: string;
}

export const createUserValidation: ValidationChain[] = [
    body('email', 'El correo es inválido').isEmail()
    .custom(existeEmail),
    body('password', 'La contraseña no cumple con los requerimientos').isStrongPassword(),
    // body('role', 'El rol es inválido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    body('role', 'El rol es inválido').custom(existeRole)
]