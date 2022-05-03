import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.NODE_ENV === 'prod' ? 8000 : process.env.SERVER_PORT;

//Mongo
const MONGO_USERNAME = process.env.MONGO_USERNAME || 'nafeojoy';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '1234';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'Blog';
const CONNECTION_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.l82bd.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`; //Mongo Connection

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const MONGO = {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    dbName: MONGO_DBNAME,
    connectionUrl: CONNECTION_URL
};

const config = {
    server: SERVER,
    host: SERVER_HOSTNAME,
    db: MONGO
};

export default config;
