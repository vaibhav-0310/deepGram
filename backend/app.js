import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./schemas/User.schemas.js";
import Posts from "./schemas/Posts.schemas.js";

const app=express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post("/signup",async(req,res)=>{
    try {
        let { email, name, username, password, picture } = req.body;

    
        if (!email || !name || !username || !password || !picture) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newUser = new User({
            email,
            name,
            username,
            password,
            picture
        });
    
        await newUser.save();
    
        res.status(200).json({ message: "User created successfully" ,  userId: newUser._id.toString()  });
        
    } catch (e) {
        console.error("Signup Error:", e);
        res.status(500).json({ error: e.message });
    }
    
});

app.post("/posts",async(req,res)=>{
     let {description}=req.body;
     let newpost=new Posts({description});
     newpost.save();
     res.json({message:"post created"});
});

app.get("/posts",async(req,res)=>{
    let data=await Posts.find();
    res.json(data);
})

app.get("/dashboard/:id", async (req, res) => {
    try {
        let { id } = req.params;

        // ✅ Check if `id` is a valid MongoDB ObjectId
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

app.get("/",(req,res)=>{
    res.send("deepGram");
})

const db= async()=>{
    mongoose.connect("mongodb://127.0.0.1/deepGram");
}
db()
    .then(()=>{console.log("Database connected")})
    .catch((e)=>{console.log(e)});
//server starting
app.listen(8080, ()=>{
    console.log("Server started at http://localhost:8080");
    
});
