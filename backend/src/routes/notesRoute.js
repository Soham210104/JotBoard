//2--notesRoute.js: Defines routes for note-related operations

import express from 'express';
import { getAllNotes,createNote, updateNote, deleteNote,getNoteById} from '../controllers/notesController.js';
const router = express.Router();

//This was like this before creating controllers folder
//The function content can be lengthy and messy so we move them to controllers
// router.get("/",(req,res)=> {
  //   res.status(200).send("Hello from backend"); //send sents a html response in the websites
  // })

  //this is controllers
router.get("/",getAllNotes)
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)


export default router;
