import express from 'express';

const userRouter = express.Router();
import {getUser, getUserById} from './../controllers/user/get-user.controller';
import postUser from './../controllers/user/post-user.controller';

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUser);

export default userRouter;