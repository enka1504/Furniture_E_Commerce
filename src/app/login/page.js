import React from 'react'
import FormLogin from './components/FormLogin'
import ImgSec from './components/ImgSec'
import Navbar from '../components/navbar/Navbar'

const LoginPage = () => {
  return (
    <div>
      <Navbar />
    <div className='flex flex-col-reverse md:flex-row container py-12 gap-10 justify-content-center align-items-center h-auto'>
      <FormLogin />
      <ImgSec/>
    </div>
    </div>
  )
}

export default LoginPage
