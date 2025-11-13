//1--server.js: Entry point of the backend application
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
// connectDB();

//Middleware to parse JSON request bodies
//just before sending response this tell to get access frrom req.body

//frontend url to be allowed to fetch data from different origin domain
app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend's origin
}));
app.use(express.json());
app.use(rateLimiter);


//use for middleware
app.use("/api/notes" , notesRoute);

app.use((req,res,next)=>{
  console.log("We just got a new request");
  next();
});

connectDB().then(()=>{
  app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
});



//------------------------------------------------------------------------------------------------------------------------------
// const express = require("express");

//we did app.use for making common path for all routes
//before making use of routes it was like this
// app.get("/api/notes",(req,res)=> {
//   res.status(200).send("Hello from backend"); //send sents a html response in the websites
// })

// app.post("/api/notes",(req,res)=> {
//   res.status(201).json({message: "Post created successfully"}); //json sends a json response
// })

// app.put("/api/notes/:id",(req,res)=> {
//   res.status(200).json({message: "Post updated successfully"}); //json sends a json response
// })

// app.delete("/api/notes/:id",(req,res)=> {
//   res.status(200).json({message: "Post deleted successfully"}); //json sends a json response
// })