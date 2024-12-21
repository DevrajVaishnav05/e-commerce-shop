import jwt from "jsonwebtoken";
import userModel from "../models/user-model.js";

export default async (req, res, next) => {
    
    if (!req.cookies.token) {
        req.flash("error", "You need to login first");
        return res.redirect("/");  // Early return
    }
    
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        
        // Find user by decoded email
        const user = await userModel.findOne({ email: decoded.email }).select("-password");
        
        if (!user) {
            req.flash("error", "User not found");
            console.log("User not found");
            return res.redirect("/");  
        }
        
        // Attach user information to the request object
        req.user = user;
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        // If there's any error (e.g., invalid token), handle it
        console.log(error);
        req.flash("error", "Something went wrong");
        return res.redirect("/");  // Early return
    }
};
