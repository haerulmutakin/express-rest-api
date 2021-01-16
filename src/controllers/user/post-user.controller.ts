import { Request, Response } from 'express';
import { Result, validationResult } from 'express-validator';
import User from '../../models/user/post-user.model';
import { ResponseBody } from './../../utils/response-generator';

const responseGenerator = new ResponseBody();

const postUser = async (req: Request, resp: Response) => {
    const validationError: Result = validationResult(req);
    if (!validationError.isEmpty()) {
        resp.status(422).send(responseGenerator.validationError(validationError.array()));
        return;
    }

    const body = req.body;
    const userData  = new User(body);
    try {
        await userData.save();
        resp.send(responseGenerator.success('Berhasil menyimpan data'));
    } catch (error) {
        resp.status(400).send(responseGenerator.failed('Gagal menyimpan data'));
    }
}

export default postUser;