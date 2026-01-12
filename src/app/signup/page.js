import React from 'react'
import ImgSec from '@/app/login/components/ImgSec'
import FormSignUp from './components/FormSignup'
import Navbar from '../components/navbar/Navbar'

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
    <div className='flex flex-col-reverse md:flex-row container py-12 gap-10 justify-content-center align-items-center h-auto'>
      <FormSignUp />
      <ImgSec/>
    </div>
    </div>
  )
}

export default SignUpPage
