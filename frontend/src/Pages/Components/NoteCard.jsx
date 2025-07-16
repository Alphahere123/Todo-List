// import { TrashIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon,Trash2Icon } from 'lucide-react'
import formatData from './Dates'
// import axios from 'axios'
// import api from '../../lib/axios'
import api from '../lib/axios'
import toast from 'react-hot-toast'
function NoteCard({note}) {

const handleDeleted = async (e,id) => {
  e.preventDefault()
  if (!window.confirm("Are you sure you want to delete this note?")) {
    return
  }
  try {
    await api.delete(`/notes/${id}`)
    toast.success('Note deleted successfully')
    // Optionally, you can refresh the notes list or redirect
    window.location.reload()
  } catch (error) {
    console.error("Error deleting note:", error)
    toast.error('Failed to delete note')
  }
}
  return (
    <Link  to={`/note/${note._id}`}  className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-green-500' >


        <div className='card-body' >
            <h3 className='card-title text-base-content' >{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3' >{note.content}</p>
<div className='card-actions justify-between items-center mt-4' >
<span className='text-sm text-base-content/60 text-green-500' >{formatData(new Date(note.createdAt))}</span>
<div className='flex items-center gap-1'></div>
<PenSquareIcon className="size-4"/>
<button className='btn btn-ghost btn-xs text-error'  onClick={(e)=>handleDeleted(e,note._id)} >
    <Trash2Icon className='size-4' />
</button>
</div>

        </div>
    </Link>
  )
}

export default NoteCard