'use client'

import React, { useState } from 'react'


const links = [
    {id: 1, link_name: 'All Products', link_url: [{name: 'Sofas', url: ''}, {name: 'Chairs', url: ''}, {name: 'Tables', url: ''}]},
    {id: 2, link_name: 'Furniture', link_url: [{name: 'Furniture', url: ''}]},
    {id: 3, link_name: 'Decore', link_url: [{name: 'Decore', url: ''}]},
    {id: 4, link_name: 'Fabrics', link_url: [{name: 'Fabrics', url: ''}]},
    {id: 5, link_name: 'Light', link_url: [{name: 'Light', url: ''}]}
]
const Navlinks = () => {
    const [openDropDown, setOpenDropDown] = useState(null);
    const handleDropdown = (id) => {
        setOpenDropDown(openDropDown === id ? null : id);
    }

  return (
 <div className="navbar-center hidden lg:flex text-black justify-center items-center bg-white py-2 w-full">
    <ul className="menu menu-horizontal px-1">
            {links.map((link)=> (
      <li key={link.id} className="dropdown dropdown-hover" onClick={() => handleDropdown(link.id)}>
        <details>
                                <summary>{link.link_name}</summary>
            {openDropDown === link.id && (
                    <ul className="p-2 bg-white w-40 z-10 rounded-xs">
                        {link.link_url.map((sublink, index) => (
                            <li key={index}><a href={sublink.url || '#'} onClick={() => handleDropdown(null)}>{sublink.name || sublink}</a></li>
                        ))}
                    </ul>
            )}
        </details>
      </li>
            ))}
    </ul>
  </div>
    )
}

export default Navlinks
