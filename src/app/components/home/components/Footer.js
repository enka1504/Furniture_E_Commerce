import React from 'react'
import Logo from '../../navbar/components/Logo'
import Link from 'next/link'

const FOOTER_DATA = [
  {
    id: 1,
    title: "Shop",
    links: ["All Products", "Furniture", "Décor", "Fabrics", "Light"]
  },
  {
    id: 2,
    title: "Furniture Categories",
    links: ["Beds", "Sofas", "Chairs", "Tables", "Room sets"]
  },
  {
    id: 3,
    title: "Décor Categories",
    links: ["Mirrors", "Vases", "Clocks", "Carpets & Rugs", "Candles & Holders"]
  },
  {
    id: 4,
    title: "Light Categories",
    links: ["Chandeliers", "Ceiling lights", "Floor lamps", "Wall sconces", "LED strips"]
  },
  {
    id: 5,
    title: "Quick Links",
    links: ["Wishlist", "Account", "Cart", "Blog"]
  }
];

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-bold text-base text-nowrap text-white">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link}>
          <Link 
            href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12 px-6 md:px-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
          
          <div className='lg:col-span-3 space-y-4'>
            <Logo />
            <p className='text-[#E2E6CE!important] text-xs leading-relaxed'>
              Furnish Your Home Completely With Us. Everything your home needs in one place – with premium quality and unique designs.
            </p>
          </div>

          <div className='lg:col-span-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {FOOTER_DATA.map((item) => (
              <FooterColumn key={item.id} title={item.title} links={item.links} />
            ))}
          </div>

        </div>
        
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm'>
          © {new Date().getFullYear()} Furniture Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer