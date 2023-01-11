const Item=require('../../Models/ItemsModel')
const User=require("../../Models/UserModel")
const {check,validationResult}=require('express-validator')

const buyItem=async (req,res)=>{
    await check('customerMail').isEmail().run(req);
    const {customerMail}=req.body
    const {itemTitle}=req.query.itemTitle
    const verifyCustomerSolde=await User.find({mail:customerMail})
    const item=await Item.find({title:itemTitle})
    console.log(item)
    if(verifyCustomerSolde[0].sold>item[0].price ){
        return res.send('Check ur solde ');
    }
    User.updateOne(
        {mail:customerMail},
        {$inc:{sold:-item[0].price}} 
    )
    Item.updateOne(
        {author:item[0].author},
        {$inc:{stock:-1}}
    )
    res.send("YES")

}

module.exports=buyItem