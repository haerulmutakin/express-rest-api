import express from 'express';

const userRouter = express.Router();
import getUser from './../controllers/user/get-user.controller';
import postUser from './../controllers/user/post-user.controller';

userRouter.get('/', getUser);
userRouter.post('/', postUser);

export default userRouter;