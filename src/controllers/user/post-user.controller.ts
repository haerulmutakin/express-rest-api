import { Request, Response } from 'express';
import User from '../../models/user/post-user.model';
import { ResponseBody } from './../../utils/response-generator';

const postUser = async (req: Request, resp: Response) => {
    const responseGenerator = new ResponseBody();
    const body = req.body;
    const userData  = new User(body);
    try {
        await userData.save();
        resp.send(responseGenerator.success('Berhasil menyimpan data'));
    } catch (error) {
        resp.statusCode = 400;
        resp.send(responseGenerator.failed('Gagal menyimpan data'));
    }
}

export default postUser;