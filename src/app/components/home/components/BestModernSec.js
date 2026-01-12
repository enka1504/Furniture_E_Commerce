import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ModernFurnCard from '@/app/utils/card/ModernFurnCard'

// import Images
import vase from '@/app/components/home/assets/imgs/vase.png'
import chandelier from '@/app/components/home/assets/imgs/chandelier.png'
import armchair from '@/app/components/home/assets/imgs/armchair.png'

const cardContents = [
  {
    id: 1,
    category: 'Decore',
    discountPercentage: '-10%',
    ImgSrcContent: vase,
    ImgSrcContentAlt: 'vase',
    cardTitle: 'Luxury Twisted Vase',
    priceBefore: '$750',
    priceAfter: '$675',
    stockStatus: true,
  },
    {
    id: 2,
    category: 'Light',
    discountPercentage: '-10%',
    ImgSrcContent: chandelier,
    ImgSrcContentAlt: 'chandelier',
    cardTitle: 'Elegant Crystal Chandelier',
    priceBefore: '$1,000',
    priceAfter: '$900',
    stockStatus: true,
  },
    {
    id: 3,
    category: 'Furniture',
    discountPercentage: '-15%',
    ImgSrcContent: armchair,
    ImgSrcContentAlt: 'armchair',
    cardTitle: 'Quilted Classic Armchair',
    priceBefore: '$1,200',
    priceAfter: '$1,020',
    stockStatus: true,
  },
]
const BestModernSec = () => {
  const tabItems = ['All', 'Decore', 'Light', 'Furniture', 'Fabrics'];
  return (
    <article className='container pb-5'>
      <h2 className="text-heading-1">Best Modern Furniture</h2>
       <Tabs defaultValue="All">
        <TabsList className="h-full mt-6 mb-5 flex-wrap justify-content-start">
          {tabItems.map((item, index) => (
            <TabsTrigger 
              key={index} 
              value={item}
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
          {tabItems.map((item, index) => (
          <TabsContent key={index} value={item} className={'flex gap-4 justify-around flex-wrap place-content-start mt-8'}>
          {cardContents.filter(card => item === "All" || card.category === item).map((card) => (
            <ModernFurnCard 
            key={card.id}
            discountPercentage={card.discountPercentage}
            ImgSrcContent={card.ImgSrcContent}
            ImgSrcContentAlt={card.ImgSrcContentAlt}
            cardTitle={card.cardTitle}
            priceBefore={card.priceBefore}
            priceAfter={card.priceAfter}
            stockStatus={card.stockStatus}
            />
          ))}
          {/* Add empty state if no cards are available for the selected category */}
          {cardContents.filter(card => item === "All" || card.category === item).length === 0 && (
            <p className="text-center w-full text-gray-500">No items available in this category.</p>
          )}
        </TabsContent>

        ))
            }
        <TabsContent value="Decore" className={'flex gap-4 justify-around flex-wrap place-content-start mt-8'}>
        </TabsContent>
      </Tabs>
    </article>
  )
}

export default BestModernSec
