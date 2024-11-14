import dotenv from 'dotenv'
import express from 'express'
import Dbconnect from './server/Config/Dbconnection.js';
import userRout from './server/Routers/UserRout.js';
import bodyParser from 'body-parser';

  dotenv.config()
const app=express()

const port=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}))
 app.use("/api/user/",userRout)
app.listen(port,()=>{
    console.log(`server start on port http://locathost:${port}`)
    Dbconnect()
})
