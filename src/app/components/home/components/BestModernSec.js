import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {  Handbag, Heart, PiIcon, Star, StarIcon } from 'lucide-react'
import Image from 'next/image'

// import Images
import fase from '@/app/components/home/assets/imgs/fase_card.png'
const BestModernSec = () => {
  return (
    <article className='container pb-5'>
      <h2 className="text-heading-1">Best Modern Furniture</h2>
       <Tabs defaultValue="All">
        <TabsList className="h-full mt-6 mb-5 flex-wrap justify-content-start">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Decore">Decore</TabsTrigger>
          <TabsTrigger value="Light">Light</TabsTrigger>
          <TabsTrigger value="Furniture">Furniture</TabsTrigger>
          <TabsTrigger value="Fabrics" className={'w-fit'}>Fabrics</TabsTrigger>
        </TabsList>
        <TabsContent value="All" className={'flex gap-4 justify-around flex-wrap place-content-start mt-8'}>
          <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 rounded-sm'}>
            <CardHeader className={'p-0'}>
              <CardTitle className={'place-self-end'}>
                <Heart className="inline-block mr-2 mb-1" />
              </CardTitle>
              <CardDescription className={'bg-(--secondary-color) w-fit px-2 py-1 rounded-sm text-white font-semibold place-self-start'}>
                -10%
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-0">
              <div className="grid gap-3">
                <Image src={fase} alt='fase' className='m-w-full w-76'/>
              </div>
              <div className="grid gap-3">
                <h5 htmlFor="tabs-demo-username" className='font-semibold text-lg'>Luxury Twisted Vase</h5>
                <p className='text-[var(--main-color-darker)!important] text-base font-bold'><span className='line-through text-gray-500 font-normal mr-2 text-sm'>$135.00</span> $120.00</p>
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
              <p className='bg-(--main-color-normal) text-[white!important] text-sm px-2 py-1 rounded-sm'>In Stock</p>
              <Button className={'bg-black rounded-[50%] cursor-pointer py-5 px-2 hover:bg-(--main-color-dark) ml-auto'}>
                <Handbag className='text-white'/>
              </Button>
            </CardFooter>
          </Card>
          <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 rounded-sm'}>
            <CardHeader className={'p-0'}>
              <CardTitle className={'place-self-end'}>
                <Heart className="inline-block mr-2 mb-1" />
              </CardTitle>
              <CardDescription className={'bg-(--secondary-color) w-fit px-2 py-1 rounded-sm text-white font-semibold place-self-start'}>
                -10%
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-0">
              <div className="grid gap-3">
                <Image src={fase} alt='fase' className='m-w-full w-76'/>
              </div>
              <div className="grid gap-3">
                <h5 htmlFor="tabs-demo-username" className='font-semibold text-lg'>Luxury Twisted Vase</h5>
                <p className='text-[var(--main-color-darker)!important] text-base font-bold'><span className='line-through text-gray-500 font-normal mr-2 text-sm'>$135.00</span> $120.00</p>
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
              <p className='bg-(--main-color-normal) text-[white!important] text-sm px-2 py-1 rounded-sm'>In Stock</p>
              <Button className={'bg-black rounded-[50%] cursor-pointer py-5 px-2 hover:bg-(--main-color-dark) ml-auto'}>
                <Handbag className='text-white'/>
              </Button>
            </CardFooter>
          </Card>
          <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 rounded-sm'}>
            <CardHeader className={'p-0'}>
              <CardTitle className={'place-self-end'}>
                <Heart className="inline-block mr-2 mb-1" />
              </CardTitle>
              <CardDescription className={'bg-(--secondary-color) w-fit px-2 py-1 rounded-sm text-white font-semibold place-self-start'}>
                -10%
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-0">
              <div className="grid gap-3">
                <Image src={fase} alt='fase' className='m-w-full w-76'/>
              </div>
              <div className="grid gap-3">
                <h5 htmlFor="tabs-demo-username" className='font-semibold text-lg'>Luxury Twisted Vase</h5>
                <p className='text-[var(--main-color-darker)!important] text-base font-bold'><span className='line-through text-gray-500 font-normal mr-2 text-sm'>$135.00</span> $120.00</p>
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
              <p className='bg-(--main-color-normal) text-[white!important] text-sm px-2 py-1 rounded-sm'>In Stock</p>
              <Button className={'bg-black rounded-[50%] cursor-pointer py-5 px-2 hover:bg-(--main-color-dark) ml-auto'}>
                <Handbag className='text-white'/>
              </Button>
            </CardFooter>
          </Card>

        </TabsContent>
        <TabsContent value="Decore" className={'flex gap-4 justify-around flex-wrap place-content-start mt-8'}>
          <Card className={'w-fit bg-white border-(--bd-color-gray) p-4 rounded-sm'}>
            <CardHeader className={'p-0'}>
              <CardTitle className={'place-self-end'}>
                <Heart className="inline-block mr-2 mb-1" />
              </CardTitle>
              <CardDescription className={'bg-(--secondary-color) w-fit px-2 py-1 rounded-sm text-white font-semibold place-self-start'}>
                -10%
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-0">
              <div className="grid gap-3">
                <Image src={fase} alt='fase' className='m-w-full w-76'/>
              </div>
              <div className="grid gap-3">
                <h5 htmlFor="tabs-demo-username" className='font-semibold text-lg'>Luxury Twisted Vase</h5>
                <p className='text-[var(--main-color-darker)!important] text-base font-bold'><span className='line-through text-gray-500 font-normal mr-2 text-sm'>$135.00</span> $120.00</p>
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
              <p className='bg-(--main-color-normal) text-[white!important] text-sm px-2 py-1 rounded-sm'>In Stock</p>
              <Button className={'bg-black rounded-[50%] cursor-pointer py-5 px-2 hover:bg-(--main-color-dark) ml-auto'}>
                <Handbag className='text-white'/>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </article>
  )
}

export default BestModernSec
