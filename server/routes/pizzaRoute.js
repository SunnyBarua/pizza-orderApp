const express=require("express")
const router=express.Router()
const Food=require("../models/foodModel")

router.get("/getallpizzas",async(req,res)=>{
    try{
        const pizzas=await Food.find({})
        res.send(pizzas)
    }catch(error){
        return res.status(400).json({message:error})
    }
})
module.exports=router;

router.post("/addpizza",async(req,res)=>{
    const pizza=req.body.pizza

   try{
    const newPizza=new Food({
        name:pizza.name,
        image:pizza.image,
        varients:['small','medium','large'],
        description:pizza.description,
        category:pizza.category,
        prices:[pizza.prices]
    })
    await newPizza.save()
    res.send('New Pizza Added Successfully!')
   }catch(error){
       return res.status(400).json({message:error})
   }

})

router.post("/getpizzabyid",async(req,res)=>{
    const pizzaid=req.body.pizzaid
    try{
        const pizza=await Food.findOne({_id:pizzaid})
        res.send(pizza)
    }catch(error){
        return res.status(400).json({message:error})
    }
})

router.post("/editpizza",async(req,res)=>{
    const editedpizza=req.body.editedpizza

    try{
        const pizza=await Food.findOne({_id:editedpizza._id})
        pizza.name=editedpizza.name,
        pizza.description=editedpizza.description,
        pizza.image=editedpizza.image,
        pizza.category=editedpizza.category,
        pizza.price=[editedpizza.prices]

        await pizza.save()
        res.send("Pizza Details Edited successfully!")
    }catch(error){
        return res.status(400).json({message:error})
    }
})

router.post("/deletepizza",async (req,res)=>{
    const pizzaid=req.body.pizzaid
    try{
        await Food.findOneAndDelete({_id:pizzaid})
        res.send("Pizza deleted successfully!")

    }catch(error){
        res.status(400).json({message:error})
    }
})