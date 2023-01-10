const mongoose =require('mongoose')

const Schema =mongoose.Schema;

const itemsSchema =new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type :String,
        require:true,
        Unique :true 
    },
    stock:{
        type: Number ,
        require:true,
    },
    price:{
        type : Number,
        require:true

    },
    author:{
        type :String,
        require:true
    }
})



const Item=mongoose.model('Item',itemsSchema)
module.exports=Item