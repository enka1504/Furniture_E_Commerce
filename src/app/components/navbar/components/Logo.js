import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex justify-content-between items-center gap-3'>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <Link href={'/'} className='font-semibold'>FurniStyle</Link>
    </div>
  )
}

export default Logo
