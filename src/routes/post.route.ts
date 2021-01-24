import express from 'express';
import { PostController } from '../controllers/post/post.controller';

const postRouter = express.Router();
const postController = new PostController();

postRouter
    .get('/', postController.getPost)
    .get('/userDetail', postController.getPostWithUserDetail)
    .post('/', postController.createPost)
    .delete('/:id', postController.deletePost)
    .put('/:id', postController.updatePost)

export default postRouter;