import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    recevierId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    message:{
        type:String,
        required:true
    },
    conversetionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"conersetion",
        default:[],
    }
},{timestamps:true})
const message= mongoose.model("message",messageSchema)
export default message;