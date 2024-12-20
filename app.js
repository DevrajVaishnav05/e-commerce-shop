import express from "express";

const app = express();
const port = process.env.PORT || 3000;
import cookieParser from "cookie-parser";

import path from "path";

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use("view engine" , "ejs");

app.get("/",(req,res)=>{
    res.send("Hello devraj ");
})


app.listen(port, ()=>{
    console.log("Server Is start ");
})