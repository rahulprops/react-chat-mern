import { Router } from "express";
import { sendMessage } from "../Controllor/SendmessageCon.js";
import { AuthLogin } from "../middleware/AuthLogin.js";


const router =Router()
router.get("/message/:id",AuthLogin,sendMessage)
export default router;