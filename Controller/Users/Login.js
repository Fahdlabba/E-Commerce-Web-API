const User=require('../../Models/UserModel')
const {check,validationResult}=require('express-validator')

const Login=async(req,res)=>{
    await check('userMail').isEmail().run(req);
    await check('userPassword').isLength({ min: 6 }).run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send('Verifer Votre donneés');
    }
    const {userMail,userPassword}=req.body;
    const verifyUser=await User.find({mail:userMail , password:userPassword})
    if(verifyUser.length===0){
        return res.status(404).send('user not found')
    }
    res.send('Welcome ')

}
module.exports=Login;