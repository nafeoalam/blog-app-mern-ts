import User from '@/models/user.model';

import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response } from 'express';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'JWT_SECRET';

export const registerUser = async (req: Request, res: Response) => {
    try {
        console.log('TEST')
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ err: 'Please add all the fields' });
        }

        const savedUser = await User.findOne({ email: email });

        if (savedUser) {
            return res.status(422).json({ err: 'Already Registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const userId = `cus-${new Date().getTime()}`;

        const user = {
            id: userId,
            email,
            password: hashedPassword
        };
        const newUser = new User(user);

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ err: 'Please add email and password' });
        }
        const savedUser: any = await User.findOne({ email: email });
        if (!savedUser) {
            return res.status(422).json({ err: 'Email not found' });
        }
        const matchPassword = await bcrypt.compare(password, savedUser.password);
        if (matchPassword) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            const { _id, id, email } = savedUser;
            res.json({ token, user: { _id, id, email } });
        } else {
            res.status(422).json({ err: 'Invalid Email or password' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
