import { Request, Response } from 'express';


export const readBlogs = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.send("Hello Node Js Blog");

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
