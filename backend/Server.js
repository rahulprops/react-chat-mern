import dotenv from 'dotenv'
import express from 'express'
  dotenv.config()
const app=express()
const port=process.env.PORT;
 app.get('/',(req,res)=>{
     res.send("hello")
 })
app.listen(port,()=>{
    console.log(`server start on port http://locathost:${port}`)
})
