import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/apnishop")

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    card:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:number,
    picture:String


})

module.exports = mongoose.model("user",userSchema);