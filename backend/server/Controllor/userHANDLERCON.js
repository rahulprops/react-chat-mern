// import message from "../modal/MessageModal"

import message from "../modal/MessageModal.js"
import user from "../modal/UserModal.js"

//GETUSERSEARCH
const getUserSearch= async (req,res)=>{
    try{
        // console.log("get search")
        const search=req.query.search || ''
        const currentuserId=req.user._id
        // console.log(userId)
        const users = await user.find({
            $and:[
                {
                    $or:[
                        {username:{$regex:'.*'+search+'.*',$options:'i'}},
                        {fullname:{$regex:'.*'+search+'.*',$options:'i'}}
                        // options means uppercase and captilazed search
                    ]
                },{
                    _id:{$ne:currentuserId} // user id not show
                }
            ]
        }).select("-password").select("-email")
        return res.status(200).json({
            sucess:true,
            message:"search users sucessful",
            users:users
        })
    }catch(err){
        return res.status(500).json({
            sucess:false,
            message:err.message,
        })
    }
}
// get current user
const getCurrentUsers= async (req,res)=>{
    try{
        console.log("get current users")
    }catch(err){
        return res.status(500).json({
            sucess:false,
            message:err.message,
        })
    }
}
export {getUserSearch,getCurrentUsers}