import React from 'react'
import { useNavigate } from 'react-router'

const GuestDash = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
      <h1 className='text-3xl mb-5'>Welcome to Tutor App</h1>
      <button className='p-2 bg-blue-400 px-6 py-2 rounded-2xl' onClick={() => navigate("user")}>
        Explore
      </button>
    </div>
  )
}

export default GuestDash