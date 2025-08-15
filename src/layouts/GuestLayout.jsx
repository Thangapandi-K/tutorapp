import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

const GuestLayout = () => {
  return (
    <div className='flex flex-col min-w-screen min-h-screen'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default GuestLayout