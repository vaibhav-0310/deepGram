
import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    picture:String,
});

const User=mongoose.model("User",UserSchema);

export default User;