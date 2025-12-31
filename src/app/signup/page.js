import React from 'react'
import ImgSec from '@/app/login/components/ImgSec'
import FormSignUp from './components/FormSignup'

const SignUpPage = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row container py-12 gap-10 justify-content-center align-items-center h-auto'>
      <FormSignUp />
      <ImgSec/>
    </div>
  )
}

export default SignUpPage
