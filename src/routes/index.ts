import express from 'express';
import userRouter from './user.route';

const appRoutes = express();
appRoutes.use('/user', userRouter);

export default appRoutes;