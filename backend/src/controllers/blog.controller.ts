import { NextFunction, Request, Response } from 'express';


export const readBlogs = async (req: Request, res: Response, next: NextFunction) => {
    // const { email, password } = req.body;
    res.status(200).send("Hello Node Js Blog Working!");

};

export const readBlog = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: 'Please add email and password' });
    }
    try {

    } catch (err) {

    }
};
