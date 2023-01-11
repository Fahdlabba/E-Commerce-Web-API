const mongoose =require('mongoose')

const Schema =mongoose.Schema;

const userSchema =new Schema({
    name:{
        type:String,
        require:true
    },
    mail:{
        type :String,
        require:true,
        Unique :true 
    },
    password:{
        type :String ,
        require:true,
    },
    status:{
        type:String,
        require:true
    },
    sold:{
        type :Number ,
        require:true,
        default:0,
    }
})



const User=mongoose.model('User',userSchema)
module.exports=User