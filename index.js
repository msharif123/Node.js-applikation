const express = require ("express")
 const app = express()

 app.get ("/", (req, res)=>{
     res.send("Hello world my name is sharif  ")
 })
 
 const port  = 3000



 app.listen(port,()=>{
     console.log("This serveris runing in locallhost port 3000")
})