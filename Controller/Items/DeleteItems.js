const Item=require('../../Models/ItemsModel')
const User=require("../../Models/UserModel")
const {check,validationResult}=require('express-validator')

const deleteItem=async(req,res)=>{
    await check('itemAuthor').isEmail().run(req)
    await check('itemTitle').notEmpty().run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result);
    }
    const {itemTitle,itemAuthor}=req.body;
    const VerifyItem=await User.find({author:itemAuthor,title:itemTitle})
    if(VerifyAuthor.length === 0){
        return res.send("Item not found ! ")
    }
    Item.remove({author:itemAuthor,title:itemTitle})
    res.send("Item removed  succefully ")
}
module.exports=deleteItem