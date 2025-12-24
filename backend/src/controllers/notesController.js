//3--notesController.js: Contains controller functions for handling note-related requests

import Note from '../models/Note.js';

//as req is not used we can use _ instead of req
export async function getAllNotes (_,res) {
  console.log("getAllNotes called");
  try {
    console.log("Fetching notes from database...");
    const notes = await Note.find().sort({createdAt: -1});//fetch all notes from the database and it will be newest first 1 means ascending and -1 means descending
    console.log(`Found ${notes.length} notes`);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getNoteById (req,res) {
  try{
    const note = await Note.findById(req.params.id);
    if(!note)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  }catch(error){
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}

export async function createNote (req,res) {
  try{
    const {title,content} = req.body;
    console.log(title,content); //We won't able to access if we wont use ass.use(express.json) Middleware.
    const note = new Note({
      title:title,
      content:content
      //As this title , title is same we can directly right Node({title,content})
    })
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  }catch(error){
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}

export async function updateNote (req,res){
  try{
    const {title,content} = req.body;
    //in the notesRouter we have written for update Router as /api/notes/:id so we used params.id but if it was /:hello then params.hello
    //keyword new,the new note in the Updated field
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{
      new:true,
    }); //title,content is the field we want to update
    if(!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  }catch(error){
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}

export async function deleteNote (req,res) {
  try{
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if(!deleteNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  }catch(error){
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}