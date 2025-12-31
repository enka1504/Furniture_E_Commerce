import React from 'react'
import FormLogin from './components/FormLogin'
import ImgSec from './components/ImgSec'

const LoginPage = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row container py-12 gap-10 justify-content-center align-items-center h-auto'>
      <FormLogin />
      <ImgSec/>
    </div>
  )
}

export default LoginPage
