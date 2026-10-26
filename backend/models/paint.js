const mongoose=require("mongoose")

const paintSchema=mongoose.Schema({
    canvasdata:String,
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:true
    }
})

const Paint=mongoose.model("paints",paintSchema)

module.exports=Paint