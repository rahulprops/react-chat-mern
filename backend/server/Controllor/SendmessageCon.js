import conversetion from "../modal/Coversesesion.js";
import message from "../modal/MessageModal.js";


const sendMessage= async (req,res)=>{
   try{
       const {chatmessage}=req.body;
       const {id:recevierId}=req.params;
       const senderId=req?.user?._id
    //    console.log(recevierId)
    let chats= await conversetion.findOne({
        participants:{$all:[senderId,recevierId]}
    })
    if(!chats){
         chats= new conversetion({
            participants:[senderId,recevierId]
         })
          await chats.save()
    }
       const newMessage=new message({
        senderId:senderId,
        recevierId:recevierId,
        message:chatmessage,
        conversetionId:chats._id,
       })
       
       if(newMessage){
        chats.message.push(newMessage._id)
        await chats.save()
         await newMessage.save()
       }
  // socket.io
  return res.status(201).json({
    sucess:true,
    message:"message created sucssful",
    newmessage:newMessage
  })
   }catch(err){
    return res.status(500).json({
        sucess:false,
        message:err.message,
    
    })
   }
}
// get message 
const getMessage= async (req,res)=>{
    try{
        const {id:recevierId}=req.params;
        const senderId=req?.user?._id
        console.log(senderId)
        const chats= await conversetion.findOne({
            participants:{$all:[senderId,recevierId]}
        }).populate("message")
        // console.log(chat)
        if(!chats){
            return res.status(200).json({
                chatmessage:[]
            })
        }
        return res.status(200).json({
            sucess:true,
            message:"chat gets sucessful",
            chats:chats
        })
    }catch(err){
        return res.status(500).json({
            sucess:false,
            message:err.message,
        })
    }
}
export {sendMessage,getMessage};