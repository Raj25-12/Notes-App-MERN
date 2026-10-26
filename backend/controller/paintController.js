const Paint =require('../models/paint')
const cloudinary = require('../config/cloudinary.js')

const createPaint = async(req,res) => {
    try{
   const {canvasdata,accountId}=req.body 
   
   const  uploadResponse = await cloudinary.uploader.upload(
    canvasdata,
    {
        folder:"painting"
    }
   );

   const response=await Paint.create({
      canvasdata:uploadResponse.secure_url,
      account:accountId
   })

   res.status(201).json({
    message:"Successfully Created",
    data:response
   })

}

catch(error){
   console.log(error)
}
}

const getallPaint = async(req,res)=>{
   const {id}=req.params
   
   const response = await Paint.find({
    account:id
   })

   res.status(201).json(response)

}

const deletePaint = async(req,res)=>{
    const {id}=req.params

    const response = await Paint.findByIdAndDelete(id)
    res.status(201).json({
        message:"Deleted"
    })
} 

module.exports={createPaint,getallPaint,deletePaint}