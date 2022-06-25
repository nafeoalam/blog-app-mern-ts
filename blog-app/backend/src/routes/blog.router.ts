import express from 'express';
import authenticate from '@src/middleware/authentication';
import { readBlogs, readBlog, createBlog, updateComments, addComments, updateBlog } from '@src/controllers/blog.controller';

const router = express.Router()


router.put('/:blogId', updateBlog); //TODO
router.put('/:blogId/comments', updateComments);
router.put('/:blogId/push-comments', addComments);
router.get('/:blogId', readBlog);
router.get('/', authenticate, readBlogs); // TODO: Full implementation of authenticate
router.post('/', createBlog);
export default router;
