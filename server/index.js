const express = require ("express")

 const path= require ("path")
 const app = express()
 require("dotenv").config()

 app.use(express.json())


 const port = process.env.port || 3770

 const connectDB= require ("../Database/db")

 app.get ("/", (req, res)=>{
     res.send("Hello world")
 })

 
// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "./html/index.html"))
// })

 


connectDB()




//  app.listen(port,()=>{
//      console.log("This serveris runing in locallhost port 3700")
// })





//mongodb+srv://mongo:<db_password>@cluster0.pp95b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



app.listen( port, ()=>{
    console.log (`This server is runing on port ${port}`)
})