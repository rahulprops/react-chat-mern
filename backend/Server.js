import dotenv from "dotenv";
import express from "express";
import Dbconnect from "./server/Config/Dbconnection.js";
import userRout from "./server/Routers/UserRout.js";
import bodyParser from "body-parser";
import messageRout from "./server/Routers/messaeRout.js";
import cookieParser from "cookie-parser";
import userhandler from "./server/Routers/userHandlerRoute.js";
import cors from 'cors'
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user/", userRout);
app.use("/api/user", messageRout);
app.use("/api/userhandler", userhandler);

app.listen(port, () => {
  console.log(`server start on port http://locathost:${port}`);
  Dbconnect();
});
