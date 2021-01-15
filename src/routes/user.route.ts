import express from 'express';

const userRouter = express.Router();
import {getUser, getUserById} from './../controllers/user/get-user.controller';
import postUser from './../controllers/user/post-user.controller';
import deleteUser from '../controllers/user/delete-user.controller';

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUser);
userRouter.delete('/:id', deleteUser)

export default userRouter;