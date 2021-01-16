import { Request, Response } from 'express';
import User from '../../models/user/post-user.model';
import { ParamGenerator } from '../../utils/generate-params'; 
import { ResponseBody } from '../../utils/response-generator';

const paramGenerator = new ParamGenerator();
const responseGenerator = new ResponseBody();

export const getUser = async (req: Request, resp: Response) => {
    const {limit, offset, params} = paramGenerator.generateParams(req.query);
    let userData = [], dataCount = 10;
    try {
        if (limit && offset) {
            userData = await User.find(params).limit(Number(limit)).skip(Number(offset));
        } else {
            userData = await User.find(params);
        }
        resp.send(responseGenerator.list(userData, dataCount));
    } catch (error) {
        console.log(error);
        resp.statusCode = 500;
        resp.send(responseGenerator.error());
    }
};

export const getUserById = async (req: Request, resp: Response) => {
    const userId = req.params.id;
    try {
        const userData = await User.findById(userId);
        resp.send(responseGenerator.detail(userData));
    } catch (error) {
        console.log(error);
        resp.statusCode = 500;
        resp.send(responseGenerator.error());
    }
}
