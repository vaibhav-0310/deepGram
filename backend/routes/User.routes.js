import express from "express";
import User from "../schemas/User.schemas.js";
import mongoose from "mongoose";
import passport from "passport";
import { Strategy as LocalStrategy, Strategy } from "passport-local";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    let { email, name, username, password, picture } = req.body;

    if (!email || !name || !username || !password || !picture) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = new User({
      email,
      name,
      username,
      picture,
    });

    await User.register(newUser, password);

    res
      .status(200)
      .json({
        message: "User created successfully",
        userId: newUser._id.toString(),
      });
  } catch (e) {
    console.error("Signup Error:", e);
    res.status(500).json({ error: e.message });
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.json({
        message: "Login successful",
        userId: user._id.toString(),
      });
    });
  })(req, res, next);
});

export default router;
