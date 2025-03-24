
import mongoose from "mongoose";

const PostsSchema= new mongoose.Schema({
   description:{
    type:String,
    required:true,
   },
   date:{
    type:Date,
    default:Date.now,
   },
   picture:{
    type:String,
   },
});

const Posts=mongoose.model("Posts",PostsSchema);

export default Posts;