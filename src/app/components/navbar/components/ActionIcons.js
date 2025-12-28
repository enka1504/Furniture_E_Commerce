import React from 'react'

// icons
import cart_icon from '@/app/components/navbar/assets/icons/cart.svg'
import user_icon from '@/app/components/navbar/assets/icons/account.svg'
import wishlist_icon from '@/app/components/navbar/assets/icons/wishlist.svg'
import Image from 'next/image'
import Link from 'next/link'

// To be implemented: import icons for cart, user, wishlist, etc.
const action_list = [
  { name: 'Cart', icon: cart_icon },
  { name: 'Account', icon: user_icon },
  { name: 'Wishlist', icon: wishlist_icon },
]
const ActionIcons = () => {
  return (
    <ul className='hidden lg:flex justify-content-between items-center gap-4'>
        {action_list.map((action) => (
            <li className='flex justify-content-between items-center gap-2 text-[#595959]' key={action.name}>
                <Image src={action.icon} alt={`${action.name} icon`} />
                <Link href={`/${action.name.toLowerCase()}`}>{action.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default ActionIcons
