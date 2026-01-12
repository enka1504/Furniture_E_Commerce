import Image from 'next/image'
import React from 'react'

const CardBlog = ({imgSrc, altText, title, description}) => {
  return (
    <div className="card-blog">
        <Image src={imgSrc} alt={altText} />
        <div className="card-blog-content">
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-[var(--sub-text-color)!important] mt-2">{description}</p>
            <button>View Blog</button>
        </div>
    </div>

)}

export default CardBlog
