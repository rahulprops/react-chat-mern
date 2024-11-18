import { Router } from "express";
import { logout, userLogin, userRegister } from "../Controllor/userConroller.js";
import { AuthLogin } from "../middleware/AuthLogin.js";
import upload from "../utils/Multer.js";

const router=Router()

router.post("/register",upload.none(),userRegister)
router.post("/login" ,upload.none(), userLogin)
router.get("/logout",AuthLogin,logout)

export default router;