import React from 'react'

// icons 
import search_icon from '@/app/components/navbar/assets/icons/search.svg'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <article className='bg-white hidden w-full lg:flex gap-3 items-center border border-none rounded-md px-2 py-3'>
        <Image src={search_icon} alt="Search Icon" />
      <input className='outline-0 block w-full ' type='text' placeholder={`What are you looking for?`} aria-label='search'/>
    </article>
  )
}

export default SearchBar
