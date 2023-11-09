import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center
     bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      
    <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/4/7/4721_1.jpg" 
        alt="" />

    </div>

    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>WOXEN</h3>
        <p className='mt-2 text-sm text-gray-500'>Women Kurta and Pant Set Art Silk Blend, Cotton Bl...</p>
    </div>

    </div>
  )
}

export default HomeSectionCard
