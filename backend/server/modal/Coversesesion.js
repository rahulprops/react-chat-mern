import mongoose from "mongoose";

const ConersesionSchema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"message",
            default:[],
        }
    ]
},{timestamps:true})
const conversetion= mongoose.model("conersetion",ConersesionSchema)
export default conversetion;
