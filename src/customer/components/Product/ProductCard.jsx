import React from 'react'
import "./productcard.css"

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top' src="https://rukminim1.flixcart.com/image/612/612/kflftzk0/top/q/t/m/l-aw-2081w-aelomart-original-imafwyzhw8t2npsk.jpeg?q=70" alt="" />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>Brand name</p>
            <p>Solid women white top.</p>
        </div>
        <div className='flex items-center space-x-2 '>
            <p className='font-semibold '>$299</p>
            <p className='line-through opacity-60'>$599</p>
            <p className='text-green-600 font-semibold'>40% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
