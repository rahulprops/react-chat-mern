import { Router } from "express";
import { AuthLogin } from "../middleware/AuthLogin.js";
import { getUserSearch } from "../Controllor/userHANDLERCON.js";
// import { getUserSearch } from "../Controllor/userHANDLERCON.js";
getUserSearch
const router=Router()
 router.get("/",AuthLogin,getUserSearch)
export default router;