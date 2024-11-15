import { Router } from "express";
import { logout, userLogin, userRegister } from "../Controllor/userConroller.js";
import { AuthLogin } from "../middleware/AuthLogin.js";

const router=Router()

router.post("/register",userRegister)
router.post("/login" , userLogin)
router.get("/logout",AuthLogin,logout)

export default router;