import React, { useEffect,useState } from 'react'
import Navbar from './Components/Navbar'
// import axios from 'axios'
import api from "../Pages/lib/axios"
import toast from 'react-hot-toast'
import NoteCard from './Components/NoteCard'


function HomePage() {
  const[notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {  

const fetchingApis= async () => { 
try {
  const responsed= await api.get("/notes")
 console.log(responsed.data);
setNotes(responsed.data)

 
  
} catch (error) {
toast.error("Failed to load notes")
  console.log("Error fetching notes:", error.message);
  console.log("internal severr error");
  

  
}
finally{
  setLoading(false)
}

 }
fetchingApis()
   },[])
  return (
    
      <div className='min-h-screen'>
        <Navbar/>
<div  className='max-w-8xl mx-auto p-4 mt-6' >
{loading && <div className='text-center text-primary py-10' >Loading notes...</div>}
{notes.length > 0 ?(
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {notes.map((note) => (
      <div>
       <NoteCard key={note._id} note={note} />

      </div>

    ))}
  </div>
) : (
  <div className='text-center text-gray-500 py-10'>No notes available</div>
)}

</div>




         </div>

    
  )
}

export default HomePage