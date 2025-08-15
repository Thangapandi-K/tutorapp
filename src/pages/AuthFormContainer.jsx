import React from 'react'
import SignInForm from '../components/forms/SignInForm';
import SignUpForm from '../components/forms/SignUpForm';
import { Outlet } from 'react-router';

const AuthFormContainer = () => {

  return (

    <div className='flex justify-center flex-grow items-center'>
        <Outlet/>
    </div>
  )
}

export default AuthFormContainer