const express=require('express')
const {Login,createUser}=require('../Controller/Users/index')
const {addItem}=require('../Controller/Items/index')
const db=require('../Database/db')
db()
const AppSatrtup=(app)=>{
    app.use(express.json()); 
    app.use(express.urlencoded({extended:false}))
    //users
    app.post('/Login',Login)
    app.post('/create',createUser)
    // Items 
    app.post('/add_item',addItem)
    app.listen(3000,()=>{
        console.log('PORT 3000 ')
    })
}

module.exports=AppSatrtup