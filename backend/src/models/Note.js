//5--Note.js: Mongoose schema and model for notes

//1 Creating schema and 2 model for that schema
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
},
  {timestamps:true} //this will create createdAt and updatedAt fields automatically
);


const Note = mongoose.model("Note",noteSchema);

export default Note;