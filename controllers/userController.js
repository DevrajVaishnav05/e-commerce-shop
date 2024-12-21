import userModel from "../models/user-model.js"
import bcrypt from "bcrypt";
import generateToken from '../utils/genarateToken.js';

export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        res.send("all input field is requied");
    }
    try {
        const oldEmail = await userModel.find({ email, email });
        if (!oldEmail) return res.send("User Email is Alrday used");
        const hashPassword = await bcrypt.hash(password, 10);
        const users = await userModel.create({
            fullname,
            email,
            password: hashPassword
        });
        const token = generateToken(users)
        res.cookie("token", token);
        res.redirect("/shop");
    } catch (error) {
        res.status(500).send({ message: "Error creating user", error });
    }
}
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
   
    
    if (!email || !password) {
        res.send("all input field is requied");
    }
    let users = await userModel.findOne({ email :email });
    if(!users) return res.send(" Email or  Password is incorrect ");
    // console.log(users);
    // console.log(email);
    // console.log(password);

    
    try {
        bcrypt.compare(password, users.password, (err, result) => {
            if (result) {
                const token = generateToken(users)
                res.cookie("token", token);
                res.redirect("/shop");
            }else{
                res.send(err, "password is not match");
            }
        });


    } catch (error) {
        res.status(500).send({ message: "Error creating user", error });
    }
}