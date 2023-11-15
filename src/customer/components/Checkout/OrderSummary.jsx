import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'


const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border'>
        <AdressCard/>
        <div>

        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border '>
                <p className='uppercase opacity-60 pb-4 font-semibold'>Price Details</p>
                <hr />
                <div className='space-y-3 font-semibold mb-2'>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span className='opacity-60'>$2999</span>
                    </div>

                    <div className="flex justify-between pt-3 text-black">
                        <span>Discounts</span>
                        <span className='text-green-600'>-499</span>
                    </div>

                    <div className="flex justify-between pt-3 text-black">
                        <span>Delivery Charges</span>
                        <span className='text-green-600'>$123</span>
                    </div>

                    <div className="flex justify-between pt-3 text-black">
                        <span>Total amount</span>
                        <span className='text-green-700 font-semibold'>$2623</span>
                    </div>
                </div>
                <Button variant="contained" className='w-full' sx={{px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd",mt:"5px"}}>
                  Chech out
                </Button>
            </div>

        </div>
        </div>

        

      
    </div>
      </div>
    </div>
  )
}

export default OrderSummary
