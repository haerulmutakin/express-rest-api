import { Request, Response } from 'express';
import User from '../../models/user/post-user.model';
import { ResponseBody } from './../../utils/response-generator';

const responseGenerator = new ResponseBody();

const putUser = async (req: Request, resp: Response) => {
    const body: any = req.body;
    if (Object.keys(body).length === 0) {
        resp.status(400).send(responseGenerator.failed('Data perubahan tidak ditemukan'));
        return;
    }
    const userId = req.params.id;
    try {
        await User.updateOne({_id: userId}, body);
        resp.send(responseGenerator.success('Berhasil menyimpan data'));
    } catch (error) {
        console.log('error', error);
        resp.status(400).send(responseGenerator.failed('Gagal menyimpan data'));
    }
}

export default putUser;