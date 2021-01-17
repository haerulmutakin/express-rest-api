import express from 'express';
import { PostController } from '../controllers/post/post.controller';

const postRouter = express.Router();
const postController = new PostController();

// userRouter.get('/', userController.getUser);
postRouter.get('/', postController.getPost);
postRouter.post('/', postController.createPost);
// userRouter.put('/:id', userController.putUser);
// userRouter.delete('/:id', userController.deleteUser)

export default postRouter;