import express from 'express';
import userRouter from './user.route';

const userRoute = express();
userRoute.use('/user', userRouter);

export default userRoute;