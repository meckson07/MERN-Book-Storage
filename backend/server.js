import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoutes from './routes/bookRoutes.js'
import {config} from 'dotenv'

config()

const app= express()
const PORT=process.env.PORT || 3000


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Welcome")
})

app.use("/books",bookRoutes)

mongoose.connect(process.env.MOONGOOSE_URL)
.then(()=>{
    console.log("mongobd connected")
    app.listen(PORT,()=>{
        console.log("Server is running")
    })
})
.catch((error)=>{
    console.log(error)
})
