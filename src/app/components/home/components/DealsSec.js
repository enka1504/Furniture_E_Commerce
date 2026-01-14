import React from 'react'

// import deal images
import white_armchair from '@/app/components/home/assets/imgs/white_armchair.png'
import orange_armchair from '@/app/components/home/assets/imgs/orange_armchair.png'
import DealCard from '@/app/utils/card/DealCard'

// deal items data
const DealItems = [
    {
        id:1,
        ImgSrc:orange_armchair,
        title: "Cozy Orange Armchair",
        ratingPoint: 4.8,
        discountPercent: 18,
        priceBeforeDiscount: '$1,500',
        priceAfterDiscount: '$1,230',
        description: "A stylish white armchair with soft velvet fabric and wooden legs — perfect for modern, cozy living spaces"
    }
    ,{
        id:2,
        ImgSrc:white_armchair ,
        title: "Modern White Armchair",
        ratingPoint: 4.9,
        discountPercent: 20,
        priceBeforeDiscount: '$1,500',
        priceAfterDiscount: '$1,200',
        description: "A stylish white armchair with soft velvet fabric and wooden legs — perfect for modern, cozy living spaces"
    }
]

const DealsSec = () => {
  return (
    <article className='container'>
        <h2 className='text-heading-1'>Deals of the Day</h2>
        {/* deal items container */}
        <div className='flex flex-col min-[1220]:flex-row gap-5 py-7'>
            {DealItems.map((deal) => (
                <DealCard key= {deal.id} deal={deal} />
            ))}
        </div>
    </article>
  )
}

export default DealsSec
