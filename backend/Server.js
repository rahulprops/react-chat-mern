import dotenv from 'dotenv'
import express from 'express'
import Dbconnect from './server/Config/Dbconnection.js';
  dotenv.config()
const app=express()
const port=process.env.PORT || 3000;
 app.get('/',(req,res)=>{
     res.send("hello")
 })
app.listen(port,()=>{
    console.log(`server start on port http://locathost:${port}`)
    Dbconnect()
})
