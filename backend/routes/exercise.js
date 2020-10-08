const express= require('express');
const route=express.Router()

let Exercise= require('../models/Exercises.models')

route.get('/',async(req,res)=>{
    try {
        const exercise= await Exercise.find()
        res.json(exercise)
    } catch (err) {
        res.status(400).json("Error: "+err)
    }
})

route.post('/add',async(req,res)=>{
    try {
        
        const username=req.body.username
        const description=req.body.description
        const duration=Number(req.body.duration)
        const date= Date.parse(req.body.date)

        const newExercise=new Exercise({
            username,
            description,
            duration,
            date
        })

        await newExercise.save()
        res.json("Exercise Added")

    } catch (err) {
        res.status(400).json("Error: "+err)
    }
})

route.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id
       const exercise= await Exercise.findById(id)
        res.json(exercise)

    } catch (err) {
        res.status(400).json("Error: "+err)
    }
})
route.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        await Exercise.findByIdAndDelete(id)
        res.json("Exercise Deleted")

    } catch (err) {
        res.status(400).json("Error: "+err)
    }
})

route.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const exercise=await Exercise.findByIdAndUpdate({_id:id},req.body,{
            new:true})
        res.json(exercise)

    } catch (err) {
        res.status(400).json("Error: "+err)
    }
})
module.exports=route