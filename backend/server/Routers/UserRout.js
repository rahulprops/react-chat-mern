import { Router } from "express";
import { logout, userLogin, userRegister } from "../Controllor/userConroller.js";

const router=Router()

router.post("/register",userRegister)
router.post("/login" , userLogin)
router.get("/logout",logout)

export default router;