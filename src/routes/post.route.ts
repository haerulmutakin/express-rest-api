import express from 'express';
import { PostController } from '../controllers/post/post.controller';

const postRouter = express.Router();
const postController = new PostController();

postRouter
    .get('/', postController.getPost)
    .post('/', postController.createPost);

export default postRouter;