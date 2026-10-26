const Accounts=require('../models/account')

const createAccount= async (req,res)=>{
    try{
    const {fullname,username,email,password}=req.body

    const existData=await Accounts.findOne({email})
    if(existData){
        return res.status(400).json({
            message:"Email already exist"
        })
    }

   const response= await Accounts.create({
        fullname,
        username,
        email,
        password
    })
   return res.status(201).json({
        message:"Account Create Successfully",
        data:response
    })
}
catch(error){
    return res.status(500).json({
        message:error.message
    })
}

}


const loginAccount = async (req,res)=>{
    try{
    const {email,password}=req.body

    const existingAccount=await Accounts.findOne({email})

    if(existingAccount){
        if(password==existingAccount.password)
        {
            res.status(201).json({
                message:"Successfull Login",
                data:existingAccount
            })
        }
        else{
            res.status(400).json({
                message:"Password is wrong"
            })
        }
    }
    else{
        res.status(400).json({
            message:"Email does not exist"
        })
    }
}
catch(error){
    res.status(500).json({
        message:"Something went wrong"
    })
}


}

module.exports={createAccount,loginAccount}