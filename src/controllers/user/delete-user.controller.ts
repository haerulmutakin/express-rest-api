import { Request, Response } from 'express';
import User from '../../models/user/post-user.model';
import { ResponseBody } from '../../utils/response-generator';

const responseBodyGenrator = new ResponseBody();

const deleteUser = async (req: Request, resp: Response) => {
    const userId = req.params.id;
    try {
        const deleteData = await User.deleteOne({_id: userId});
        if (deleteData.n > 0) {
            resp.send(responseBodyGenrator.success('Berhasil menghapus data'));
        } else {
            resp.statusCode = 400;
            resp.send(responseBodyGenrator.failed('Gagal menghapus data'));
        }
    } catch (error) {
        console.log(error);
        resp.statusCode = 400;
        resp.send(responseBodyGenrator.failed('Gagal menghapus data'));
    }
}

export default deleteUser;