const express=require("express")

const router=express.Router()

const {createNote,getAllHeading,deleteNote,getContentByheading,updateNote}=require('../controller/contentController')

router.post("/create",createNote)
router.get("/getheading/:id",getAllHeading)
router.delete("/deleteNote/:id",deleteNote)
router.get("/getcontent/:id",getContentByheading)
router.put("/updatenote/:id",updateNote)

module.exports=router