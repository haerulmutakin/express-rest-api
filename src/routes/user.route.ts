import express from 'express';
import {getUser, getUserById} from './../controllers/user/get-user.controller';
import postUser from './../controllers/user/post-user.controller';
import deleteUser from '../controllers/user/delete-user.controller';
import { postUserValidation } from '../controllers/user/user-validation';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUserValidation(), postUser);
userRouter.delete('/:id', deleteUser)

export default userRouter;