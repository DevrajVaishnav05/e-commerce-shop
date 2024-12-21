import jwt from "jsonwebtoken";

const generateToken = (users)=>{
    return jwt.sign({ email:users.email , id: users._id }, process.env.JWT_KEY, { expiresIn: '1h' });
}
export default generateToken;