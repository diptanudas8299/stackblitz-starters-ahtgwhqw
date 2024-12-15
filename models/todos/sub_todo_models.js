import { Timestamp } from "bson"
import mongoose, { mongo } from "mongoose"

const subTodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  completed:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
  },
},{timestamps:true});

export const SubTodo = mongoose.model('subTodo',subTodoSchema);