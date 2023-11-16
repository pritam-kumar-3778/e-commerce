import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl mr-10 border rounded-md'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item sx={6}>

            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                <div className='ml-5 space-y-2'>

                    <p className=''>Formal along with stylish</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: White</p>
                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
            <p>$2899</p>
        </Grid>

        <grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered on Nov 07
                </span>
                
            </p>
            <p className='text-xs'>Your item has been delivered</p>
                </div>}
            {false && <p>
                <span>
                    Expected Delivery on Nov 07
                </span>
            </p>}
        </grid>

      </Grid>
    </div>
  )
}

export default OrderCard
