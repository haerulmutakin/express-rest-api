import { AuthController } from './../controllers/auth/auth.controller';
import express from 'express';
import userRouter from './user.route';
import postRouter from './post.route';
import authRouter from './auth.route';

const appRoutes = express();
const authController = new AuthController();

appRoutes.use('/auth', authRouter);
appRoutes.use('/user', authController.authenticateToken, userRouter);
appRoutes.use('/post', authController.authenticateToken, postRouter);

export default appRoutes;