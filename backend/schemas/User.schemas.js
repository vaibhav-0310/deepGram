import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// Make sure your User schema looks something like this
const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    username: String,
    picture: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }]
  });
UserSchema.plugin(passportLocalMongoose);

const User=mongoose.model("User",UserSchema);

export default User;