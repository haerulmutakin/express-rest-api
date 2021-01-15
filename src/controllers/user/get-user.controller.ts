import { Request, Response } from 'express';
import User from '../../models/user/post-user.model';
import { ParamGenerator } from '../../utils/generate-params'; 
import { ResponseBody } from '../../utils/response-generator';

const getUser = async (req: Request, resp: Response) => {
    const paramGenerator = new ParamGenerator();
    const responseGenerator = new ResponseBody();
    const params = paramGenerator.generateParams(req.query);
    let userData = [], dataCount = 10;
    try {
        if (params.pagination) {
            userData = await User.find().limit(params.limit).skip(params.offset);
        } else {
            userData = await User.find();
        }
        resp.send(responseGenerator.list(userData, dataCount));
    } catch (error) {
        console.log(error);
        resp.statusCode = 500;
        resp.send(responseGenerator.error());
    }
};

export default getUser;
