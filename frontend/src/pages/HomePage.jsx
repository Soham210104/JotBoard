//1-- Home Page Component starting

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import NoteCard from '../components/NoteCard.jsx';
import NotesNotFound from '../components/NotesNotFound.jsx';
import api from '../lib/axios.js';

const HomePage = () => {
  const [isRateLimited, setisRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () =>{
      try{
        //we are doing this with fetch directly
        // const res = await fetch("http://localhost:5173/api/notes");
        // const data = await res.json();

        //this is with axios
        // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        // const res = await axios.get(`${API_URL}/api/notes`);
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setisRateLimited(false);
      }catch(error){
        console.error("Error fetching notes:", error);
        if(error.response?.status === 429){
          setisRateLimited(true);
        }
        else{ 
          toast.error("An error occurred while fetching notes.");
        }
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  },[]);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      {/* “If isRateLimited is true, then render <RateLimitedUI />.
      If it’s false, render nothing.” */}
      {isRateLimited && <RateLimitedUI /> }

      <div className="max-w-7xl mx-auto p-4">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0  && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          //If the screen is small then 1 column, medium then 2 columns, large then 3 columns 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              //When we delete a note , the UI is not updating to reflect that change.
              //We refresh the page to reflect the changes so what we do is pass
              //setNote function to NoteCard component.
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage