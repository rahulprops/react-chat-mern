// import message from "../modal/MessageModal"

import conversetion from "../modal/Coversesesion.js"
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
const getCurrentUsers = async (req, res) => {
    try {
        const currentUserId = req.user._id;
        const currentChatters = await conversetion.find({
            participants: currentUserId
        }).sort({ updatedAt: -1 });

        if (!currentChatters || currentChatters.length === 0) {
            return res.status(200).json({ currentChatters: [] });
        }

        const participantIds = currentChatters.reduce((ids, conversation) => {
            const otherParticipants = conversation.participants.filter(id => id.toString() !== currentUserId.toString());
            return [...ids, ...otherParticipants];
        }, []);

        const uniqueParticipantIds = [...new Set(participantIds)]; // Remove duplicates if needed

        const users = await user.find({
            _id: { $in: uniqueParticipantIds }
        }).select("-password -email");

        return res.status(200).json({
            success: true,
            message: "User connections found successfully",
            users
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export {getUserSearch,getCurrentUsers}