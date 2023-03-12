import { ValidationChain, body, param } from 'express-validator';
import { existeRole, existeUsuarioID } from '../helpers/validations';

export interface UpdateUserBody {
    id?:     string;
    nombre?: string;
    email?:  string;
    password?: string;
    role?: string;
    img?: string;
    google?: boolean;
    estado?: boolean;
}

export interface UpdateUserParams {
    id?: number;
}

export const updateUserBodyValidation: ValidationChain[] = [
    param('id', 'No es un ID válido').notEmpty().isNumeric()
    .custom((id: string) => existeUsuarioID(+id)),
    body('email', 'El correo es inválido').isEmail(),
    body('password', 'La contraseña no cumple con los requerimientos').isStrongPassword(),
    body('role', 'El rol es inválido').optional().custom(existeRole)
]