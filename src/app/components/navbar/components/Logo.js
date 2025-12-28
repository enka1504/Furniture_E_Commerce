import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex justify-content-between items-center gap-3'>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <p className='font-semibold'>FurniStyle</p>
    </div>
  )
}

export default Logo
