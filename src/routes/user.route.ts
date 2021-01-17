import express from 'express';
import { UserController } from '../controllers/user/user.controller';
import { postUserValidation } from '../controllers/user/user.validator';

const userRouter = express.Router();
const userController = new UserController();

userRouter
    .get('/', userController.getUser)
    .post('/', postUserValidation(), userController.postUser);
userRouter
    .get('/:id', userController.getUserById)
    .put('/:id', userController.putUser)
    .delete('/:id', userController.deleteUser);

export default userRouter;