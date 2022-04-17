import express from 'express';
import { loginUser, registerUser } from "@/controllers/user.controller"

const router = express.Router();

//PUBLIC
router.post('/register', registerUser);
router.post('/login', loginUser);
export default router;
