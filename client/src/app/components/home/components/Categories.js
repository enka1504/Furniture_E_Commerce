import React from 'react';
import Image from 'next/image';

// Import Images
import fabric from '../assets/imgs/fabric.png'
import coach from '../assets/imgs/coach.png'
import fase from '../assets/imgs/fase.png'
import light from '../assets/imgs/light.png'

const categoriesData = {
    Fabric: [
        "Curtains",
        "Bed linens",
        "Pillows",
        "Tablecloths",
        "Throws / Blankets"
    ],
    Coach: [
        "Beds",
        "Sofas",
        "Chairs",
        "Tables",
        "Room sets"
    ],
    Fase: [
        "Mirrors",
        "Vases",
        "Clocks",
        "Carpets & rugs",
        "Candles & holders"
    ],
    Light: [
        "Chandeliers",
        "Ceiling lights",
        "Floor lamps",
        "Wall sconces",
        "LED strips"
    ]
}



const Categories = () => {
    return (
        <section className='container' style={{paddingBottom:'20px'}}>
            <h2 className='font-semibold text-4xl'>Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-6 mt-8'>
            <div className='card-category flex-row bg-[#FEF4DB] md:col-span-4 '>
                <div className='self-start'>
                <h3>Fabric</h3>
                <ul>
                    {categoriesData.Fabric.map((item, index) => (
                        <li key={index} className='text-gray-600 text-sm'>{item}</li>
                    ))}
                </ul>
                </div>
                <Image src={fabric} alt={"Fabric"} className='w-1/2' />
            </div>
            <div className='card-category md:flex-col md:justify-baseline items-center md:items-start bg-[#EFF6F3] content-start md:col-span-2 md:row-span-4 gap-4 p-6 '>
                <div>
                <h3>Furniture</h3>
                <ul>
                    {categoriesData.Coach.map((item, index) => (
                        <li key={index} className='text-gray-600 text-sm'>{item}</li>
                    ))}
                </ul>
                </div>
                <Image src={coach} alt={"Coach"} />
            </div>
            <div className='card-category flex-row bg-[#EFF6F3] md:col-span-4 md:row-span-4 '>
                <div className='self-start'>
                    <h3>Décor</h3>
                    <ul>
                        {categoriesData.Fase.map((item, index) => (
                            <li key={index} className='text-gray-600 text-sm'>{item}</li>
                        ))}
                    </ul>
                </div>
                <Image src={fase} alt={"Fase"} className="md:mr-12 md:mt-12" />
            </div>
            <div className='card-category flex-row bg-[#FEF4DB] md:col-span-2 p-6 relative '>
                <div>
                <h3>Light</h3>
                <ul>
                    {categoriesData.Light.map((item, index) => (
                        <li key={index} className='text-gray-600 text-sm'>{item}</li>
                    ))}
                </ul>
                </div>
                <Image src={light} alt={"Light"} className='absolute top-0 right-0' />
            </div>
            </div>
        </section>
    )
}

export default Categories;