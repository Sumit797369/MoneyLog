import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='bg-black min-h-screen flex items-center justify-center'>
      <div className='text-center' >
        <h1 className="text-4xl font-bold mb-4 text-white">404 - Oops! Page Not Found</h1>
        <Link to={"/"} className='text-white hover:text-gray-300 underline'>Return to Home</Link> 
      </div>
    </div>
  )
}

export default NotFound
