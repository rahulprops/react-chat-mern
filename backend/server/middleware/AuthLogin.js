import jwt from 'jsonwebtoken';
import user from '../modal/UserModal.js'; // Assuming user modal import for user verification

const AuthLogin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Check if the token exists
    // console.log(token)
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authorized, no token provided",
      });
    }

    // Verify the token
       const decoded = await jwt.verify(token, process.env.JWT_SECURE_KEY);
       console.log(decoded)

      // Optionally, you can find and attach the user to the request object
      const authenticatedUser = await user.findById(decoded.userid);
      if (!authenticatedUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      req.user = authenticatedUser; // Attach user data to request
      next();

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export { AuthLogin };
