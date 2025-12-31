import React from 'react'
import Image from 'next/image'

// Gif
import not_found_gif from '@/app/assets/vedio/not_found.gif'
const not_found = () => {
  return (
    <div className='w-full h-screen justify-items-center align-content-center bg-white py-6'>
      <p className='text-xl md:text-4xl font-bold text-[var(--main-color)!important]'>This Page is Not Found!</p>
      <Image src={not_found_gif} alt="Not Found Gif" />
    </div>
  )
}

export default not_found
