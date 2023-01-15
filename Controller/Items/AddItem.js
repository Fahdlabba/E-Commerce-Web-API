const Item=require('../../Models/ItemsModel')
const User=require("../../Models/UserModel")
const Freelancer=require('../../Models/FreelancerModel')
const {check,validationResult}=require('express-validator')


const addItem=async(req,res)=>{
    await check('itemAuthor').isEmail().run(req)
    await check('itemTitle').notEmpty().run(req);
    await check('itemDescription').isLength({ min: 6 }).run(req);
    await check('itemStock').notEmpty().run(req)
    await check('itemPrice').notEmpty().run(req)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result);
    }
    const {itemTitle,itemDescription,itemStock ,itemPrice,itemAuthor}=req.body;
    const VerifyAuthor=await User.find({mail:itemAuthor,status:"freelancer"})
    if(VerifyAuthor.length === 0){
        return res.send("Author not found ! ")
    }
    const item=new Item({
        title : itemTitle,
        description:itemDescription,
        stock:itemStock,
        price:itemPrice,
        author:itemAuthor,
    })
    const freelancer=new Freelancer({
        mail:itemAuthor,
        itemTitle:itemTitle,
    })
    freelancer.save()
    item.save().catch((err)=>{console.log(err)})
    res.send("Item added succefully ")
}
module.exports=addItem