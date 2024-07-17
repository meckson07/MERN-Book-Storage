import express from 'express'
import book from '../model/bookSchema.js'

const router=express.Router()

router.post("/",async(req,res)=>{
    try{
        if(!req.body.name || !req.body.author || !req.body.year) 
            return res.status(201).json({"errmessage":"invalid data"})
        const user={
            name:req.body.name,
            author:req.body.author,
            year:req.body.year
        }
        
        const newUser= await book.create(user)

        return res.status(201).json(newUser)
    }catch(error){
        console.log(error)
    }
})

router.get("/",async(req,res)=>{
    const data=await book.find({})

    res.status(200).json(data)
})

router.get("/:id",async(req,res)=>{
    const {id}=req.params
    if(!id) return res.status(400).json({"errmessage":"invalid data"})
    
    const data= await book.findById(id)
    if(!data)  return res.status(400).json({"errmessage":"invalid User"})

    return res.status(200).json(data)
})

router.delete("/:id",async(req,res)=>{
    const {id}=req.params
    if(!id) return res.status(400).json({"errmessage":"invalid data"})
    
    await book.findByIdAndDelete(id)

    return res.status(200).json({"message":"deleted"})
})

router.put("/:id",async(req,res)=>{
    const {id}=req.params
    if(!id) return res.status(400).json({"errmessage":"invalid data"})
    
    const data= await book.findByIdAndUpdate(id,req.body,{new:true})
    if(!data)  return res.status(400).json({"errmessage":"invalid User"})

    return res.status(200).json(data)

})

export default router