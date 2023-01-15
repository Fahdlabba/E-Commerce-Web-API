const express=require('express')
const {Login,createUser,resetPassword}=require('../Controller/Users/index')
const {addItem,buyItem,deleteItem}=require('../Controller/Items/index')
const fetchItem=require('../Controller/Dashboard/FetchItem')
const db=require('../Database/db')
db()
const AppSatrtup=(app)=>{
    app.use(express.json()); 
    app.use(express.urlencoded({extended:false}))
    //users
    app.post('/user/login',Login)
    app.post('/user/create',createUser)
    app.use('/user/reset_password',resetPassword)
    // Items 
    app.post('/item/add_item',addItem)
    app.post('/item/fetch',fetchItem)
    app.post('/item/buy',buyItem)
    app.delete('/item/delete',deleteItem)
    //serveur 
    app.listen(3000,()=>{
        console.log('PORT 3000 ')
    })
}

module.exports=AppSatrtup