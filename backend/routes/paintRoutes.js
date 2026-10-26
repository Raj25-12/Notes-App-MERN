const express=require("express")

const router=express.Router()

const {createPaint,getallPaint,deletePaint} = require('../controller/paintController')

router.post("/createpaint",createPaint)
router.get("/getpaint/:id",getallPaint)
router.delete("/deletepaint/:id",deletePaint)

module.exports=router
