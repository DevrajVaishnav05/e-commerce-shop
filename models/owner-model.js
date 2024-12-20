import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isadmin:Boolean,
    // products:{
    //     type:Array,
    //     default:[]
    // },
    contact:Number,
    picture:String,
    gstin:String,
})
const owner =  mongoose.model("owner",ownerSchema);
export default  owner;