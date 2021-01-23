import { body, query } from 'express-validator';

export const postUserValidation = () => {
    return [
        body('username')
            .notEmpty().withMessage('Username harus diisi'),
        body('firstName')
            .notEmpty().withMessage('Nama depan harus diisi'),
        body('email')
            .notEmpty().withMessage('Email harus diisi')
            .isEmail().withMessage('Format email salah'),
        body('password')
            .notEmpty().withMessage('Passowrd harus diisi'),
        body('passwordConfirmation')
            .notEmpty().withMessage('Password confirmation harus diisi')
    ]
}

export const getUserValidation = () => {
    return [
        query('organization').notEmpty().withMessage('Organization is required')
    ]
}