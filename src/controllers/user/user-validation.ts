import { check } from 'express-validator';

export const postUserValidation = () => {
    return [
        check('name')
            .notEmpty().withMessage('Name is required'),
        check('address')
            .notEmpty().withMessage('Address is required')
    ]
}