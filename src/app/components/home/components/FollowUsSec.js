import React from 'react'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

// import images
import orange_landscape from '@/app/components/home/assets/imgs/orange_landscape.png'
import blue_landscape from '@/app/components/home/assets/imgs/blue_landscape.jpg'
import colorful_landscape from '@/app/components/home/assets/imgs/colorful_landscape.png'

const FollowUsSec = () => {
  return (
    <article className='container'>
        <h2 className='text-heading-1'>Follow Us On Instagram</h2>
      <section className='grid grid-cols-1 md:grid-cols-3 justify-center items-center p-4 gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-row-1 md:grid-rows-3 gap-4'>
        <Image className='md:row-start-1 md:row-end-3  h-full object-cover rounded-lg border border-black' src={colorful_landscape} alt="colorful landscape" />
        <Image className='md:row-start-2 md:row-end-3 hidden md:block justify-end h-full object-cover rounded-lg border border-black' src={colorful_landscape} alt="colorful landscape" />
        <Image className='md:col-span-2 hidden md:block md:row-span-1 rounded-lg border border-black' src={colorful_landscape} alt="colorful landscape" />
        </div>
      <div className=' rounded-lg relative brightness-90'>
        <Instagram size={48} className='absolute top-[50%] left-[50%] z-100' />
        <Image src={blue_landscape} alt="blue landscape" className='block rounded-lg' />
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-row-1 md:grid-rows-3 gap-4'>
        <Image className='md:row-start-2 md:row-end-3 justify-end h-full object-cover rounded-lg border border-black' src={orange_landscape} alt="orange landscape" />
        <Image className='md:row-start-1 md:row-end-3 hidden md:block h-full object-cover rounded-lg border border-black' src={orange_landscape} alt="orange landscape" />
        <Image className='md:col-span-2 hidden md:block md:row-span-1 rounded-lg border border-black' src={orange_landscape} alt="orange landscape" />
      </div>
        </section>
    </article>
  )
}

export default FollowUsSec
