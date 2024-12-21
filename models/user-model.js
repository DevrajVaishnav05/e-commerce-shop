import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
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