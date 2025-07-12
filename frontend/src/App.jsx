import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import NotePage from './Pages/NotePage'
import CreatePage from './Pages/CreatePage'

// import toast from 'react-hot-toast'
function App() {
  return (
    <div data-theme="forest">
{/*       
      <button className='bg-indigo-600 p-2 m-1 text-white rounded' onClick={() => toast.success('SuccessFull')}>Click Me</button>
       */}
       {/* <button className='btn btn-primary' > js</button> */}
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      
    </div>
    
  )
}

export default App