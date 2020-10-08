const express=require('express')
const route= express.Router()

let User= require('../models/User.models')

route.get('/',async(req,res)=>{
    try {
        const user= await User.find() 
        res.json(user)
    } catch (err) {
        res.status(400).json('Error: '+err)
    }
})

route.post('/add',async(req,res)=>{
    try {
        const username= req.body.username

        const newUser=new User({
            username
        })
    
        await newUser.save()
        res.json("User Added")
    } catch (err) {
       res.status(400).json('Error: '+err)
    }

})

module.exports=route