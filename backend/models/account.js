const mongoose = require('mongoose')

const accountSchema=mongoose.Schema({
    fullname:String,
    username:String,
    email:String,
    password:String
})

const Accounts=mongoose.model("account",accountSchema)

module.exports=Accounts