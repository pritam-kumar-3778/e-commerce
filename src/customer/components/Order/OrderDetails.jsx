import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5 shadow-md'>
        <div>
            <h1 className='text-xl font-semibold py-6'>Delivery Address</h1>
        <AdressCard/>
        </div>
      
        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=>
            
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

                <Grid item sx={6}>

                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[6rem] object-cover object-top' src="https://images.unsplash.com/photo-1609748342012-7dfce6fee14f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHNhcmVlfGVufDB8fDB8fHww" alt="" />

                        <div className='space-y-2'>
                            <p>Women cotton Saree</p>
                            <p className='space-x-5 font-semibold opacity-50 text-xs'><span>color: White </span><span>Size: M</span></p>
                            <p>Seller: linaria</p>
                            <p>$6699</p>
                        </div>
                    </div>

                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>

                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5px'/>
                        <span>Rate & Review Product</span>

                    </Box>
                </Grid>

            </Grid>
            )}


        </Grid>



    </div>
  )
}

export default OrderDetails
