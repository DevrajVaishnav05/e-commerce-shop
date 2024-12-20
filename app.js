import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = process.env.PORT ;

//  ====>>>  Database Setup <<======
import DB from "./config/mongoose-connection.js"; DB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));

// Application  server  routes
import ownersRouter from './routers/ownerRoute.js';
import usersRouter from './routers/userRoute.js';
import productsRouter from './routers/productRoute.js';

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

export default app;