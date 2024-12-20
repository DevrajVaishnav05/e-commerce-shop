import mongoose from "mongoose";
// import dbgr from "debug" 
// const dbgr = debug('development:mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/apnishop").then(function(){
//     console.log("connection db ");
// }).catch(function(err){
//     console.log( " Show the error" ,err);
// })
// module.exports = mongoose;

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_LOCAL);
    console.log("Database connection ");
  } catch (err) {
    console.log(err.msg);
    console.log(err.stack);
    console.log(err);
  }
};
export default dbConnect;