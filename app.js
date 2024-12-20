import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

import DB from './config/mongoose-connection.js'; 

DB();

// Middleware Setup
app.use(cors()); 
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());  

app.set('view engine', 'ejs');


// app.use(express.static(path.join(__dirname, 'public')));
console.log();


import ownersRouter from './routers/ownerRoute.js';
import usersRouter from './routers/userRoute.js';
import productsRouter from './routers/productRoute.js';


// console.log('NODE_ENV:', process.env.NODE_ENV);


app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);



export default app;
