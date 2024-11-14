import { Router } from "express";
import { userRegister } from "../Controllor/userConroller.js";

const router=Router()

router.post("/register",userRegister)

export default router;