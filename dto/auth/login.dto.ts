import { ValidationChain, body } from 'express-validator';
import { existeUsuario } from '../../helpers/validations';

export interface LoginBody {
    email: string;
    password: string;
}

export const loginValidation: ValidationChain[] = [
    body('correo', 'El correo es obligatorio').isEmail()
    .custom(existeUsuario),
    body('password', 'La contraseña es obligatoria').notEmpty(),
];