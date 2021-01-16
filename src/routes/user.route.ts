import express from 'express';
import {getUser, getUserById} from './../controllers/user/get-user.controller';
import postUser from './../controllers/user/post-user.controller';
import deleteUser from '../controllers/user/delete-user.controller';
import putUser from '../controllers/user/put-user.controller';
import { postUserValidation, getUserValidation } from '../controllers/user/user-validation';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUserValidation(), postUser);
userRouter.put('/:id', putUser);
userRouter.delete('/:id', deleteUser)

export default userRouter;