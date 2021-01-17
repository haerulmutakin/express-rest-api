import { body, query } from 'express-validator';

export const postUserValidation = () => {
    return [
        body('name')
            .notEmpty().withMessage('Nama harus diisi'),
        body('address')
            .notEmpty().withMessage('Alamat harus diisi')
    ]
}

export const getUserValidation = () => {
    return [
        query('organization').notEmpty().withMessage('Organization is required')
    ]
}