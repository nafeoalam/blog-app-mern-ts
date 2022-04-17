import jwt from 'jsonwebtoken';
import customerSchema from '../models/authModels/customer.model';
// import { JWT_SECRET } from '../config/keys';
import { NextFunction } from 'express';

export const public_aut = (req: any, res: any, next: NextFunction) => {
    const { authorization } = req.headers;
    //authorization === Bearer ewefwegwrherhe
    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in' });
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'JWT_SECRET', (err: any, payload: any) => {
        if (err) {
            return res.status(401).json({ error: 'you must be logged in' });
        }

        const { _id } = payload;
        customerSchema.findById(_id).then((userdata: any) => {
            req.user = userdata;
            next();
        });
    });
};
