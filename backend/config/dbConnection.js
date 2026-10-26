const mongoose =require("mongoose")

const connectDB = ()=>{
    try{
       mongoose.connect(process.env.URI)
       console.log("MongoDB connected")
    }
    catch(error)
    {
      console.log("Error while connect to DataBase",error)
    }
}

module.exports=connectDB