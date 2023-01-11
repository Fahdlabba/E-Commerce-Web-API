const express=require('express')
const {Login,createUser}=require('../Controller/Users/index')
const {addItem,buyItem}=require('../Controller/Items/index')
const fetchItem=require('../Controller/Dashboard/FetchItem')
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
    app.post('/fetch',fetchItem)
    app.post('/buy',buyItem)
    app.listen(3000,()=>{
        console.log('PORT 3000 ')
    })
}

module.exports=AppSatrtup