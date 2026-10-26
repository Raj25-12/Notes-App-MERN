const mongoose=require("mongoose")

const contentSchema=mongoose.Schema({
    heading:String,
    note:String,
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:true
    }
})

const Content=mongoose.model("content",contentSchema)

module.exports=Content