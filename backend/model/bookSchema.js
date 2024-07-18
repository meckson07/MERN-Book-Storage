import mongoose from 'mongoose'

const bookSchema=mongoose.Schema(
    {
        name:{type:String, required:true},
        author:{type:String, required:true},
        year:{type:Number, required:true},
        description:{type:String, required:true}
    },{
        timestamps:true
    }
)

const book=mongoose.model("book",bookSchema)

export default book