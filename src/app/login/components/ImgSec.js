import React from 'react'
import Image from 'next/image'

// images
import green_view from '@/app/assets/imgs/green_furniture.jpg'
import green_v_view from '@/app/assets/imgs/green_vertical_view.jpg'

const ImgSec = () => {
  return (
    <article className="grid grid-cols-2 gap-3 h-[300px] md:h-[600px] w-full md:flex-1">
      <div className="relative h-full w-full">
        <Image 
          src={green_v_view} 
          alt="Green Furniture Vertical View" 
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="grid grid-rows-3 gap-3 h-full">
        <div className="relative w-full h-full">
          <Image 
            src={green_view} 
            alt="Green Furniture View" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-full row-start-2 row-end-4">
          <Image 
            src={green_v_view} 
            alt="Green Furniture Vertical View" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  )
}

export default ImgSec