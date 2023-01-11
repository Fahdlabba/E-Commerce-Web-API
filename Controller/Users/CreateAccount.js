const path=require('path')
const User=require('../../Models/UserModel')
const {check,validationResult}=require('express-validator')

const createUser=async(req,res)=>{
    await check('userMail').isEmail().run(req);
    await check('userPassword').isLength({ min: 6 }).run(req);
    await check('userName').notEmpty().run(req)
    await check('userStatus').notEmpty().run(req)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result);
    }
    const {userMail,userName,userPassword,userStatus}=req.body;
    const VerifyUser=await User.find({mail:userMail})
    if(VerifyUser.length!=0){
        res.status(404).send('user found')
        return 
    }
    const user=new User({
        name:userName,
        mail:userMail,
        password:userPassword,
        status:userStatus
    })
    user.save().catch((err)=>{
        console.log(err);
    })
    res.send('Welcome');

}
module.exports=createUser;