const express=require('express')
const app=express()
const routerTask=require('./routes/task')
const connectDB= require('./db/connect')
const notFound=require('./midlleware/notFound-eror')
const errorHandlerMiddlware = require('./midlleware/error-handler');
require('dotenv').config()

//midllware
app.use(express.static('./public'))
app.use(express.json())//parse data in json
//routes
app.use('/api/v1/tasks',routerTask)
app.use(notFound)
app.use(errorHandlerMiddlware)
 const port=process.env.PORT|| 5001
const start=async()=>{
   try {
       await connectDB(process.env.URL)
       app.listen(port,()=>{
        console.log(`server is running in port ${port}...`)
    })
   } catch (error) {
       console.log(error);
   }
 }
start()