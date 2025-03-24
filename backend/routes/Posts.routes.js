import express from "express";
import User from "../schemas/User.schemas.js";
import Posts from "../schemas/Posts.schemas.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/posts/:id", async (req, res) => {
  let { description } = req.body;
  let { id } = req.params;
  const newPost = new Posts({ description });
  await newPost.save();
  await User.findByIdAndUpdate(id, { $push: { posts: newPost._id } });
});

router.get("/posts/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let user = await User.findById(id).populate("posts");
    res.json(user.posts);
  } catch (e) {
    console.log(e);
  }
});

export default router;
