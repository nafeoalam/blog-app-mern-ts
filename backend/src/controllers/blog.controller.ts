import { Request, Response } from 'express';
import Blog from '@/models/blog.model';
import HttpStatusCode from '@/utils/httpStatusCodes';

export const readBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find()
        res.status(HttpStatusCode.OK).send(blogs);
    } catch (err) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    }
};

export const readBlog = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({ err: 'Please add email and password' });
        }
    } catch (err) {}
};

export const createBlog = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Plase add all the fields' });
        }

        const post = new Blog({
            title,
            content
        });

        const result = await post.save();
        res.status(HttpStatusCode.CREATED).json(result);
    } catch (err) {
        console.log(err);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);

    }
};
