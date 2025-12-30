import React from 'react'

// css
import './pageloader.css'
const PageLoader = () => {
  return (
        <div class="loader w-full h-screen flex flex-col justify-center items-center gap-4">
        <div class="sofa-parent">
            <div class="top-sofa"></div>
            <div class="bottom-sofa"></div>
        </div>
        <p>Loading</p>
        </div>
  )
}

export default PageLoader
