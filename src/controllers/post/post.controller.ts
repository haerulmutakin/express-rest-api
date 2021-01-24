import { Request, Response } from 'express';
import { param } from 'express-validator';
import Post from '../../models/post/post.model';
import User from '../../models/user/user.model';
import { ResponseBody } from '../../utils/response-generator';

export class PostController {

    private responseGenerator = new ResponseBody();
    public createPost = async (req: Request, res: Response) => {
        const body = req.body;
        const user = await User.findById(body.userId);
        if (!user) {
            res.status(400).send(this.responseGenerator.failed('Data author tidak ditemukan'));
            return;
        }
        const postData: any  = new Post(body);
        postData.author = user;
        try {
            await postData.save();
            res.send(this.responseGenerator.success('Berhasil menyimpan data'));
        } catch (error) {
            res.status(400).send(this.responseGenerator.failed('Gagal menyimpan data'));
        }
    }

    public getPost = async (req: Request, res: Response) => {
        const params = req.query;
        let userData = [], dataCount = 10;
        try {
            userData = await Post.find(params);
            res.send(this.responseGenerator.list(userData, dataCount));
        } catch (error) {
            res.status(500).send(this.responseGenerator.error());
        }
    }

    public getPostWithUserDetail = async (req: Request, res: Response) => {
        const params = req.query;
        const dataCount = 10;
        try {
            const userData: Array<any> = await Post.find(params).populate('author', ['username', 'firstName']);
            res.send(this.responseGenerator.list(userData, dataCount));
        } catch (error) {
            res.status(500).send(this.responseGenerator.error());
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const deletePost = await Post.deleteOne({_id: id});
            if (deletePost.n > 0) {
                res.send(this.responseGenerator.success('Berhasil menghapus data'));
            } else {
                res.status(400).send(this.responseGenerator.failed('Gagal menghapus data'));
            }
        } catch (error) {
            res.status(400).send(this.responseGenerator.failed('Gagal menghapus data'));
        }
    }

    public updatePost = async (req: Request, res: Response) => {
        const {body, params} = req;
        if (Object.keys(body).length === 0) {
            res.status(400).send(this.responseGenerator.failed('Data perubahan tidak ditemukan'));
            return;
        }
        const { id } = params;
        try {
            await Post.updateOne({_id: id}, body);
            res.send(this.responseGenerator.failed('Berhasil mengubah data'));
        } catch (error) {
            res.status(400).send(this.responseGenerator.failed('Gagap mengubah data'));
        }

    }

}