import { Request, Response } from 'express';
import { Result, validationResult } from 'express-validator';
import User from '../../models/user/user.model';
import { ParamGenerator } from '../../utils/generate-params'; 
import { ResponseBody } from '../../utils/response-generator';

export class UserController {
    private validationRes = validationResult;
    private paramsGenerator = new ParamGenerator();
    private responseGenerator = new ResponseBody();

    public getUser = async (req: Request, res: Response) => {
        const validationError: Result = this.validationRes(req);
        if (!validationError.isEmpty()) {
            res.status(422).send(this.responseGenerator.validationError(validationError.array()));
            return;
        }
        const {limit, offset, params} = this.paramsGenerator.generateParams(req.query);
        let userData = [], dataCount = 10;
        try {
            if (limit && offset) {
                userData = await User.find(params).limit(Number(limit)).skip(Number(offset)).select(['username', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt']);
            } else {
                userData = await User.find(params).select(['username', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt']);
            }
            res.send(this.responseGenerator.list(userData, dataCount));
        } catch (error) {
            console.log(error);
            res.status(500).send(this.responseGenerator.error());
        }
    }

    public getUserById = async (req: Request, resp: Response) => {
        const userId = req.params.id;
        try {
            const userData = await User.findById(userId);
            resp.send(this.responseGenerator.detail(userData));
        } catch (error) {
            console.log(error);
            resp.status(500).send(this.responseGenerator.error());
        }
    }

    public postUser = async (req: Request, resp: Response) => {
        const validationError: Result = validationResult(req);
        if (!validationError.isEmpty()) {
            resp.status(422).send(this.responseGenerator.validationError(validationError.array()));
            return;
        }
    
        const body = req.body;
        const userData  = new User(body);
        console.log(userData);
        try {
            await userData.save();
            resp.send(this.responseGenerator.success('Berhasil menyimpan data'));
        } catch (error) {
            console.log('error', error);
            resp.status(400).send(this.responseGenerator.failed('Gagal menyimpan data'));
        }
    }

    public putUser = async (req: Request, resp: Response) => {
        const body: any = req.body;
        if (Object.keys(body).length === 0) {
            resp.status(400).send(this.responseGenerator.failed('Data perubahan tidak ditemukan'));
            return;
        }
        const userId = req.params.id;
        try {
            await User.updateOne({_id: userId}, body);
            resp.send(this.responseGenerator.success('Berhasil mengubah data'));
        } catch (error) {
            console.log('error', error);
            resp.status(400).send(this.responseGenerator.failed('Gagal menyimpan data'));
        }
    }

    public deleteUser = async (req: Request, resp: Response) => {
        const userId = req.params.id;
        try {
            const deleteData = await User.deleteOne({_id: userId});
            if (deleteData.n > 0) {
                resp.send(this.responseGenerator.success('Berhasil menghapus data'));
            } else {
                resp.statusCode = 400;
                resp.send(this.responseGenerator.failed('Gagal menghapus data'));
            }
        } catch (error) {
            console.log(error);
            resp.statusCode = 400;
            resp.send(this.responseGenerator.failed('Gagal menghapus data'));
        }
    }
}