import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='bg-blue-300 p-4 w-full flex items-center justify-between px-5'>
        <NavLink className='text-4xl font-bold' to={""}>Tutor App</NavLink>
        <NavLink className='bg-blue-600 text-white px-6 py-3 rounded-2xl' to={"auth/register"}>Login / Sign Up</NavLink>
    </div>
  )
}

export default NavBar