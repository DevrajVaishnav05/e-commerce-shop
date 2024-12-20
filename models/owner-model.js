import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    
    isadmin:Boolean,
    products:{
        type:Array,
        default:[]
    },
    contact:number,
    picture:String,
    gstin:String,
})
module.exports = mongoose.model("owner",ownerSchema);