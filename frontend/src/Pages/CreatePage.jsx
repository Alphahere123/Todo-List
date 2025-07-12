import { ArrowLeft, ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'
function CreatePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      toast.error('All fields are required')
      return
      
    }
    setLoading(true)
    try {
await axios.post('http://localhost:5001/api/notes', {
      title,
      content,
    })
     
      toast.success('Note created successfully')
      // Redirect to home page or note page
      // window.location.href = '/'
      navigate('/')


    } catch (error) {
      console.error("Error creating note:", error)
      toast.error('All fields are required')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen bg-base-200' >
      <div className='container  mx-auto px-4 py-8' >
        <div className='max-w-2xl mx-auto'>
          <Link to={'/'} >
          <ArrowLeftIcon className='size-5'/>
          Back to Notes </Link>

          <div className='card bg-base-100' >
            <div className='card-body' >
              <h2 className='card-title text-2xl mb-4' > Create New Note </h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-5'>

<label className='label' >

                <span className='label-text'>Title:</span>
</label>
              <input
                type="text"
                className='input input-bordered'
                placeholder='Write your title here...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
                />

                </div>
                <div className='form-control mb-4'>

<label className='label' >

                <span className='label-text'>Content:</span>
</label>
            <textarea
            
         
                className='textarea textarea-bordered h-32'
                placeholder=' Write your Content here...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
                </div>
<div className='card-actions justify-end' >
  <button
    type='submit'
    className='btn btn-primary'
    disabled={loading}
  >
    {loading ? 'Creating...' : 'Create Note'}
  </button>
</div>

              </form>
            </div>
          </div>
        </div>
      </div>
     


    </div>
  )
}

export default CreatePage