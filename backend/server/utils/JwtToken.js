import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const jwtToken = (userid, res) => {
  try {
    // Create a token using the user ID as the payload
    const token = jwt.sign({userid }, process.env.JWT_SECURE_KEY, { expiresIn: '30d' });
    //  console.log(process.env.JWT_SECURE_KEY)
    // Set the cookie in the response
    res.cookie('token', token, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
      httpOnly: false, // Secure the cookie by making it inaccessible via JavaScript in the browser
      sameSite: 'strict', // Prevent CSRF by enforcing same-site cookie policy
    
    });

    return token;
  } catch (error) {
    // console.error('Error generating JWT:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default jwtToken;
