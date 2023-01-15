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
    app.post('/Login',Login)
    app.post('/create',createUser)
    app.use('/reset',resetPassword)
    // Items 
    app.post('/add_item',addItem)
    app.post('/fetch',fetchItem)
    app.post('/buy',buyItem)
    app.delete('/delete',deleteItem)
    app.listen(3000,()=>{
        console.log('PORT 3000 ')
    })
}

module.exports=AppSatrtup