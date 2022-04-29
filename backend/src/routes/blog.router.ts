import express from 'express';
import { readBlogs, readBlog, createBlog } from '@/controllers/blog.controller';

const router = express.Router();

//PUBLIC
router.get('/', readBlogs);
router.post('/', createBlog);
router.post('/{blogId}', readBlog);
export default router;
