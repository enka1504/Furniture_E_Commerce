import React from 'react'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import ActionIcons from './components/ActionIcons'
import Image from 'next/image'
import search_icon from '@/app/components/navbar/assets/icons/search.svg'
import cart_icon from '@/app/components/navbar/assets/icons/cart.svg'
import user_icon from '@/app/components/navbar/assets/icons/account.svg'
import wishlist_icon from '@/app/components/navbar/assets/icons/wishlist.svg'
import Link from 'next/link'
const action_list = [
  { name: 'Cart', icon: cart_icon },
  { name: 'Account', icon: user_icon },
  { name: 'Wishlist', icon: wishlist_icon },
]
const links = [
    {id: 1, link_name: 'All Products', link_url: [{name: 'Sofas', url: ''}, {name: 'Chairs', url: ''}, {name: 'Tables', url: ''}]},
    {id: 2, link_name: 'Furniture', link_url: [{name: 'Furniture', url: ''}]},
    {id: 3, link_name: 'Decore', link_url: [{name: 'Decore', url: ''}]},
    {id: 4, link_name: 'Fabrics', link_url: [{name: 'Fabrics', url: ''}]},
    {id: 5, link_name: 'Light', link_url: [{name: 'Light', url: ''}]}
]


const Header = () => {
  return (
    <header className='navbar shadow-sm w-full bg-[#EFF6F3] text-black py-3 px-4 md:px-2 flex justify-evenly items-center'>
      <Logo />
      <div className='flex gap-3' style={{ flex: '0 0 40%' }}>
        <SearchBar/>
      </div>
        <ActionIcons/>
      <div className='dropdown dropdown-end lg:hidden'>
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
          </svg>
        </div>
        
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-none z-10 w-[80vw] p-3 shadow-md mt-4 bg-white"
        >
          <li className="mb-3">
            <article className='bg-white flex w-full gap-3 items-center border border-gray-200 rounded-md px-2 py-2'>
              <Image src={search_icon} alt="Search Icon" />
              <input className='outline-0 block w-full' type='text' placeholder={`What are you looking for?`} aria-label='search'/>
            </article>
          </li>
          
          {/* Mobile Navigation Links */}
          {links.map((item) => (
            <li key={item.id} className='border-b border-gray-100 last:border-b-0'>
              <Link href={item.link_url[0].url}>{item.link_name}</Link>
            </li>
          ))}

          <li className='menu-title pt-4 border-t border-gray-200'>
            Account & Cart
          </li>
          {action_list.map((action) => (
            <li key={action.name}>
              <Link href={`/${action.name.toLowerCase()}`} className='flex items-center gap-2 text-[#595959]'>
                <Image src={action.icon} alt={`${action.name} icon`} width={20} height={20} />
                {action.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
