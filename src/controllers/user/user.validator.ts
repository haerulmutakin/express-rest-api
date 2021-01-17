import { body, query } from 'express-validator';

export const postUserValidation = () => {
    return [
        body('username')
            .notEmpty().withMessage('Username harus diisi'),
        body('firstName')
            .notEmpty().withMessage('Nama depan harus diisi')
    ]
}

export const getUserValidation = () => {
    return [
        query('organization').notEmpty().withMessage('Organization is required')
    ]
}