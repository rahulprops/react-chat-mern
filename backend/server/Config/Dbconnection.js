import mongoose from "mongoose";

const Dbconnect= async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/chat")
        console.log("db connect")
    }catch(err){
        console.log("db not connect"+err)
    }
}
export default Dbconnect;