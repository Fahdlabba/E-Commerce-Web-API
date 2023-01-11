const mongoose =require('mongoose')

const Schema =mongoose.Schema;

const freelancerSchema =new Schema({
    mail :{
        type : String ,
        require:true,
        unique:true
    },
    itemTitle:{
        type : String ,
        require :true,
    },
    sold:{
        type :Number ,
        require:true,
        default:0,
    }
})



const Freelancer=mongoose.model('Freelancer',freelancerSchema)
module.exports=Freelancer