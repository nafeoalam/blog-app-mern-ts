import express from 'express';
import { readBlogs, readBlog, } from '@/controllers/blog.controller';

const router = express.Router();


//PUBLIC
router.get('/blogs', readBlogs);
// router.post('/blogs/{blogId}', readBlog);
export default router;
