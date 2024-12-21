import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    card:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    role:String,
    contact:Number,
    picture:String
})

   const  user = mongoose.model("user",userSchema);

   export default user;