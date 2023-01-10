const mongoose=require("mongoose")
require('dotenv').config();
const MANGO_URL=process.env.MANGO_URL
mongoose.set('strictQuery', false)
module.exports=async function(){
    await mongoose.connect(MANGO_URL,{useNewUrlParser:true,useUnifiedTopology: true} ).then((result)=>{
    console.log("connected to db ");
    }).catch((err)=>{
        console.log(err)
    })
}
