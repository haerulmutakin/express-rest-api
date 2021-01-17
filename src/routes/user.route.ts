import express from 'express';
import { UserController } from '../controllers/user/user.controller';
import { postUserValidation } from '../controllers/user/user.validation';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/', userController.getUser);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', postUserValidation(), userController.postUser);
userRouter.put('/:id', userController.putUser);
userRouter.delete('/:id', userController.deleteUser)

export default userRouter;