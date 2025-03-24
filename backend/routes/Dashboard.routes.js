import express from "express";
import User from "../schemas/User.schemas.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/dashboard/:id", async (req, res) => {
  try {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    let data = await User.findById(id);

    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
