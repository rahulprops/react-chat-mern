import { Router } from "express";
import { getMessage, sendMessage } from "../Controllor/SendmessageCon.js";
import { AuthLogin } from "../middleware/AuthLogin.js";


const router =Router()
router.post("/message/:id",AuthLogin,sendMessage)
router.get("/message/:id",AuthLogin,getMessage)
export default router;