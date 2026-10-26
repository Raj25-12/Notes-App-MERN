const Content=require('../models/content')

const createNote = async (req,res) => {
    const {heading,note,accountId}=req.body

    if(!heading.trim() || !note.trim()){
        return res.status(400).json({
            message:"Heading and Notes are required"
        })
    }
     const response=await Content.create({
        heading,
        note,
        account:accountId
     })
     res.status(201).json({
        message:"Note Saved"
     })
}

const getAllHeading=async (req,res)=>{
    const {id}=req.params
    const response=await Content.find({
      account:id
    })
    res.json(response)
} 

const getContentByheading=async(req,res)=>{
    const {id}=req.params

    const respose=await Content.findById(id)
    res.json(respose)

}

const deleteNote=async (req,res)=>{
    const {id}=req.params
   const response=await Content.findByIdAndDelete(id)
   res.json(response)
}

const updateNote=async (req,res)=>{
    const {id}=req.params
    const {heading,note}=req.body
    try{
          const response=await Content.findOneAndUpdate({_id:id},
        {
            heading,
            note
        },
        {
            new:true
        }
    )
    res.status(201).json({
        message:"Note Updated Successfully",
        data:response
    })
    }
    catch(error){
        res.status(500).json({
            message:"For some reason We Cann`t update"
        })
    }
}

module.exports={createNote,getAllHeading,deleteNote,getContentByheading,updateNote}