import express from 'express';
import { loginUser, registerUser } from "@src/controllers/user.controller"

const router = express.Router();

//PUBLIC
router.post('/register', registerUser);
router.post('/login', loginUser);
export default router;
