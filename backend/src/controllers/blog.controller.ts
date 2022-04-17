import {  Request, Response } from 'express';


export const readBlogs = async (req: Request, res: Response) => {
    try {
        res.status(200).send("Hello Node Js Blog Working!");
    } catch (error) {
        res.status(500).send(error);
    }
};

export const readBlog = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: 'Please add email and password' });
        }
        
    } catch (err) {

    }
};
