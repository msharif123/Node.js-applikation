const mongoose = require ("mongoose")

const infoSchema=  mongoose.Schema(
  {
    document: {
      type: String,
      rquired: true
    },
    description:{
      type: String,
      required: false
    },
  
    quantity:{
      type: Number,
      required: true,
    }
  
})

timestamps: true
const Info= mongoose.model("Info", infoSchema)
module.exports=Info