import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';
import cors from 'cors';

const NAMESPACE: string = 'Server';
const app = express();

/** Log the request */
app.use((req: Request, res: Response, next: NextFunction) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use CORS
app.use(cors())

/** API Rules  */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */

import BlogRoutes from './routes/blog.routes';
app.use('/api/blogs', BlogRoutes);


/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

// Mongoose Connection
mongoose
    .connect(config.db.connectionUrl)
    .then(() => app.listen(config.server.port, () => console.log(`Server Running on Port: http://localhost:${config.server.port}`)))
    .catch((error) => console.log(`${error} did not connect`));
