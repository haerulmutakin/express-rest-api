import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user/user.model';
import { ResponseBody } from '../../utils/response-generator';

export class AuthController {
    private responseGenerator = new ResponseBody();

    private generateAccessToken = (user: any) => {
        const JWT_SECRET: any = process.env.MY_SECRET_JWT_TOKEN;
        return jwt.sign({user}, JWT_SECRET, {expiresIn: '600s'});
    }

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

    public authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers['authorization'];
        const token: any = authHeader && authHeader.split(' ')[1];
        if (!token) {
            res.sendStatus(401);
            return;
        }
        const JWT_SECRET: any = process.env.MY_SECRET_JWT_TOKEN;
        jwt.verify(token, JWT_SECRET as string, (err: any, user: any) => {
            if (err) {
                res.sendStatus(401);
                return;
            }
            req.header = user;
            next();
        });
    }

}