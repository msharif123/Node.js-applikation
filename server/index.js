

// börja med att skapa en server

const express = require ("express")
const app = express()



 const info= require ("../modules/info")


require ("dotenv").config()

 app.use(express.json()) 


 const port = process.env.PORT || 3500  
 
//connect to DB
 const connectDB= require ("../Database/db")
const Info = require("../modules/info")


// testa om det lysta på localhost
 app.get ("/", (req, res)=>{
     res.send("Hello world")
 })

 //hämta alla info
 app.get ("/info", async (req, res)=>{

   try {
    const info = await Info.find({})
    res.status(200).json(info)

    
   } catch (error) {
    res.status(500).json({message:error.message})
    
   }
 })

//hämta info via ID 
 app.get ("/info/:id", async (req,res)=>{
    try {
        const {id}= req.params
        const info = await Info.findById(id)
        res.status(200).json(info)
      
      

    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
 })
 // skicka new info
 app.post("/info", async (req, res)=>{
   // console.log(req.body)  
 //res.send(req.body)      // console log to try if it works with postman {"":"",}
   
try {
    const newInfo= await info.create(req.body)
    res.status(200).json(newInfo)
    
} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
    
}

  
 })
 //updatera en eller flera info

 app.put("/info/:id", async( req, res)=>{
    try {
        const {id} = req.params
        const info = await Info.findByIdAndUpdate(id, req.body)
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
 })


// radera en eller flera info 

app.delete("/info/:id", async (req, res)=>{
  try{  
     const {id} = req.params
    const info = await Info.findByIdAndDelete(id)
    res.status(200).json(info)
    

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

/

 
//  app.get("/", (req,res)=>{
//      res.sendFile(path.join(__dirname, "./html/index.html"))
//  })


//  app.listen(port,()=>{
//      console.log("This serveris runing in locallhost port 3700")
// })
 
//mongodb+srv://mongo:<db_password>@cluster0.pp95b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



connectDB()

app.listen( port, ()=>{
console.log (`This server is runign on port ${port}`)
})