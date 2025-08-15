import React from 'react'
import UserNav from '../components/UserNav'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div className='flex flex-col min-w-screen min-h-screen'>
      <UserNav/>
      <Outlet/>
    </div>
  )
}

export default UserLayout