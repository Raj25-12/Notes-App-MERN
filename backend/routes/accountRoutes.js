const express=require('express')

const router=express.Router()

const {createAccount,loginAccount} = require('../controller/accountController')

router.post('/create',createAccount)
router.post('/login',loginAccount)

module.exports=router