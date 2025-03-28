import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./schemas/User.schemas.js";
import Posts from "./schemas/Posts.schemas.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserRoutes from "./routes/User.routes.js";
import PostsRoutes from "./routes/Posts.routes.js";
import DashboardRoutes from "./routes/Dashboard.routes.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1/deepGram" }),
    secret: "random",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  const curr = req.user;
  res.locals.curr = curr;
  console.log(curr);
  next();
});

app.use(UserRoutes);
app.use(DashboardRoutes);
app.use(PostsRoutes);

const db = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/deepGram");
};
db()
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });
//server starting
app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
