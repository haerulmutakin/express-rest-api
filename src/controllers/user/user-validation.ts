import { body, query } from 'express-validator';

export const postUserValidation = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required'),
        body('address')
            .notEmpty().withMessage('Address is required')
    ]
}

export const getUserValidation = () => {
    return [
        query('organization').notEmpty().withMessage('Organization is required')
    ]
}