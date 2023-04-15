import { ValidationChain, query } from 'express-validator';

export interface GetUsersQuery {
    limit?:  string;
    offset?: string;
}

export const getUserValidation: ValidationChain[] = [
    query('limit', 'El limite es inválido').optional().isNumeric(),
    query('offset', 'El offset es inválido').optional().isNumeric(),
]