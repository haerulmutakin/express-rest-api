import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user/user.model';
import { ResponseBody } from '../../utils/response-generator';

export class AuthController {

    private responseGenerator = new ResponseBody();
    public login = async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const userData = await User.findOne({username});
        if (!userData) {
            res.status(400).send(this.responseGenerator.failed('User not found'));
            return;
        }
        if (!bcrypt.compareSync(password, userData.password)) {
            res.status(400).send(this.responseGenerator.failed('Password salah'));
            return;
        }
        const responseBody: any = {
            userData: userData,
            token: this.generateAccessToken(userData)
        }
        res.send(this.responseGenerator.detail(responseBody));
        
    }

    private generateAccessToken = (user: any) => {
        const JWT_SECRET: any = process.env.MY_SECRET_JWT_TOKEN;
        return jwt.sign({user}, JWT_SECRET, {expiresIn: '120s'});
    }

}