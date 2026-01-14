import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DealCard = ({ deal }) => {
  return (
        <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 md:min-w-[580px] rounded-sm grid grid-cols-1 md:grid-cols-2 justify-center items-center'}>
      <CardHeader className="block p-3 bg-(--bg-color-lighter-gray) justify-center rounded-sm">
        <Badge className="justify-start bg-(--main-color-dark) text-white font-semibold rounded-sm">{deal.discountPercent} % OFF</Badge>
        <Image src={deal.ImgSrc} alt={deal.title} className="w-56 object-cover justify-self-center rounded-lg" />
        </CardHeader>
        <CardContent className="flex flex-col h-full justify-evenly gap-2 p-0">
            <CardTitle className="text-[23px] font-bold mb-2 w-[271px]">{deal.title}</CardTitle>
            <p className='text-[var(--main-color)!important] font-semibold'>{deal.priceAfterDiscount}  <span className='text-[#CCCCCC]'>{deal.priceBeforeDiscount}</span></p>
            <div>
                <StarIcon className='inline-block text-(--secondary-color) size-4'/>
                <span className='ml-2 text-gray-600'>{deal.ratingPoint} </span>
            </div>
            <p className="text-lg text-gray-600 mb-2">{deal.description}</p>
        </CardContent>
    </Card>
  )
}

export default DealCard
