import { Router } from "express";
import { AuthLogin } from "../middleware/AuthLogin.js";
import { getCurrentUsers, getUserSearch } from "../Controllor/userHANDLERCON.js";
// import { getUserSearch } from "../Controllor/userHANDLERCON.js";
getUserSearch
const router=Router()
 router.get("/search",AuthLogin,getUserSearch)
router.get("/currentusers",AuthLogin,getCurrentUsers)
export default router;