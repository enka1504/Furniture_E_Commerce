import React from 'react'

// imgs
import header_img from '@/app/components/home/assets/imgs/header.jpg'
import Image from 'next/image'

const Header = () => {
    return(
        <section className='container-header bg-[#fcfcfc] relative md:my-10 md:mx-auto flex flex-col gap-3 md:block'>
            <Image className='rounded-0 md:rounded-[50px] max-w-md' src={header_img} alt = "header image" />
            <div className='p-5 md:p-0'>
                <p className='block text-header-img top_header-content -top-5 text-4xl leading-12 p-0 md:pt-[30px] md:pr-[70px] pb-[5px] -left-2 md:pl-[25px]'>Furnish Your Home Completely With Us</p>
                <p className='block text-header-img bottom-header-content text-[#999993!important] md:text-black right-0 -bottom-px p-2.5 md:pt-11 md:pl-7 md:pr-52 text-wrap'>Everything your home needs in one place – with premium quality and unique designs.</p>
            </div>
        </section>
    )
}

export default Header