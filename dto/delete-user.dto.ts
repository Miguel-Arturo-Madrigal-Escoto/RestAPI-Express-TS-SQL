import { ValidationChain, param } from "express-validator";
import { existeUsuarioID } from "../helpers/validations";

export interface DeleteUserParams {
    id?: number;
}

export const deleteUserValidation: ValidationChain[] = [
    param('id', 'No es un ID válido').notEmpty().isNumeric()
    .custom((id: string) => existeUsuarioID(+id)),
]