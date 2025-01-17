import mongoose, { Types } from "mongoose"

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete :{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodos:[
       {
          type:mongoose.Schema.Types.ObjectId,
          ref:"subTodo"
      }
  ]
  // array of sub todo
},{timestamps:true})


export const Todo = mongoose.model("Todo",todoSchema)