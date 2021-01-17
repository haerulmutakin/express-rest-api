import express from 'express';
import userRouter from './user.route';
import postRouter from './post.route';

const appRoutes = express();
appRoutes.use('/user', userRouter);
appRoutes.use('/post', postRouter);

export default appRoutes;