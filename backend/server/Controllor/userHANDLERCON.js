// import message from "../modal/MessageModal"

//GETUSERSEARCH
const getUserSearch= async (req,res)=>{
    try{
        console.log("get search")
    }catch(err){
        return res.status(500).json({
            sucess:false,
            message:err.message,
        })
    }
}
export {getUserSearch}