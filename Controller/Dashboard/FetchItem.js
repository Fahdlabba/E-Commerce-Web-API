const User=require("../../Models/UserModel")
const Freelancer=require('../../Models/FreelancerModel')

const fetchItem=async(req,res)=>{
    const {freelancerMail}=req.body
    const verifyFreelacer=await User.find({mail:freelancerMail})
    if(verifyFreelacer.length===0){
        return res.send('Freelacer Not found !')
    }
    const items=await Freelancer.find({mail:freelancerMail})
    if(items.length===0){
        return res.send('Empty')
    }
    res.json(items)
}
module.exports=fetchItem