import express from 'express';
import userRouter from './user.route';
import postRouter from './post.route';
import authRouter from './auth.route';

const appRoutes = express();
appRoutes.use('/auth', authRouter);
appRoutes.use('/user', userRouter);
appRoutes.use('/post', postRouter);

export default appRoutes;