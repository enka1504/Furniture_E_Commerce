import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

// icons
import cartIcon from '@/app/components/assets/icons/cart.svg'
import heartIcon from '@/app/components/assets/icons/wishlist.svg'

const ModernFurnCard = ({ discountPercentage, ImgSrcContent, ImgSrcContentAlt, cardTitle, priceBefore, priceAfter, stockStatus }) => {
  return (
          <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 rounded-sm grid grid-row-3 justify-center items-center'}>
            <CardHeader className={'p-0'}>
              <CardTitle className={'place-self-end'}>
                <Image className="inline-block mr-2 mb-1" src={heartIcon} alt='favourites'/>
              </CardTitle>
              <CardDescription className={'bg-(--secondary-color) w-fit px-2 py-1 rounded-sm text-white font-semibold place-self-start'}>
                {discountPercentage}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-0">
              <div className="grid gap-3">
                <Image src={ImgSrcContent} alt={ImgSrcContentAlt} className='m-w-full w-76'/>
              </div>
              <div className="grid gap-3">
                <h5 htmlFor="tabs-demo-username" className='font-semibold text-lg'>{cardTitle}</h5>
                <p className='text-[var(--main-color-darker)!important] text-base font-bold'><span className='line-through text-gray-500 font-normal mr-2 text-sm'>{priceBefore}</span> {priceAfter}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
              </div>
            </CardContent>
            <CardFooter className={'p-0'}>
              <p className='bg-(--main-color-normal) text-[white!important] text-sm px-2 py-1 rounded-sm'>{stockStatus ? "In Stock" : "Out of Stock"}</p>

              <Button className={'bg-black rounded-[50%] cursor-pointer py-5 px-2 hover:bg-(--main-color-dark) ml-auto'}>
                <Image className=' brightness-1400' src={cartIcon} alt='cart'/>
              </Button>
            </CardFooter>
          </Card>
  )
}

export default ModernFurnCard
