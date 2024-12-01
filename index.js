const express = require ("express")

 const path= require ("path")
 const app = express()
 app.use(express.json())

 app.get ("/", (req, res)=>{
     res.send("Hello world  ")
 })
 
// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "./html/index.html"))
// })

 const port  = 3000



 app.listen(port,()=>{
     console.log("This serveris runing in locallhost port 3000")
})