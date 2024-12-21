import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from "express-session";
import flash from "connect-flash"
dotenv.config();
const app = express();

import DB from './config/mongoose-connection.js'; 
DB();

app.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
}));

// Flash messages middleware
app.use(flash());
// Middleware Setup
app.use(cors()); 
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());  

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// console.log(path.join(__dirname, 'public'));

import ownersRouter from './routers/ownerRoute.js';
import usersRouter from './routers/userRoute.js';
import productsRouter from './routers/productRoute.js';
import indexRoute from './routers/index.js';

// console.log('NODE_ENV:', process.env.NODE_ENV);
app.use('/', indexRoute);
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

export default app;
