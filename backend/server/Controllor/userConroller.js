import user from "../modal/UserModal.js";
import bcrypt from "bcrypt";

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

export { userRegister };
