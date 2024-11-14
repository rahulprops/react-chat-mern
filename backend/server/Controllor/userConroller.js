import user from "../modal/UserModal.js";
import bcrypt from "bcrypt";
import jwtToken from "../utils/JwtToken.js";

// Register User
const userRegister = async (req, res) => {
  try {
    const { fullname, username, useremail, password, gender, userphoto } =
      req.body;

    // Check if all required fields are provided
    if (!fullname || !username || !useremail || !password || !gender) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    // Check if the username already exists
    const findUser = await user.findOne({ username });
    if (findUser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Check if the email already exists
    const findEmail = await user.findOne({ email: useremail });
    if (findEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new user({
      fullname,
      username,
      email: useremail,
      password: hashedPassword,
      gender,
      userphoto,
    });
    await newuser.save();
    if(newuser){
        await newuser.save();
          await jwtToken(newuser._id,res)
    }else{
        return res.status(400).json({
            success:false,
            message:"user not create "
        })
    }

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newuser._id,
        username: newuser.username,
        email: newuser.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// user login
const userLogin = async (req, res) => {
    try {
      const { username, userpassword } = req.body;
  
      // Find the user by username
      const finduser = await user.findOne({ username: username });
      if (!finduser) {
        return res.status(400).json({
          success: false,
          message: 'User not found'
        });
      }
  
      // Compare the provided password with the stored password hash
      const comparepass = await bcrypt.compare(userpassword, finduser.password);
      if (!comparepass) {
        return res.status(400).json({
          success: false,
          message: 'Please enter the correct password'
        });
      }
     await jwtToken(finduser._id,res)
      // Login successful response
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        user:{
             name:finduser.fullname
        }
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }
  };
// logout 
const logout= async (req,res)=>{
    try{
        res.cookie("jwt",'',{
            maxAge:0
        })
        return res.status(200).json({
            success:true,
            message:"logout successful"
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
export { userRegister,userLogin,logout };
