const User=require('../../Models/UserModel')
const {check,validationResult}=require('express-validator')


const resetPassword=async(req,res)=>{
    await check('userMail').isEmail().run(req);
    await check('userPassword').isLength({min:6}).run(req)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send('Verifier Votre donneés');
    }
    const {userMail,newPassword}=req.body;
    const verifyUser=await User.find({mail:userMail})
    if(verifyUser.length===0){
        return res.status(404).send('user not found')
    }
    if(verifyUser[0].password === newPassword ){
        return res.status(401).send("Error !")
    }
    User.updateOne(
        {mail:userMail},
        {password: newPassword}
    )
    res.send("Password Updated ! ")

}
module.exports=resetPassword;