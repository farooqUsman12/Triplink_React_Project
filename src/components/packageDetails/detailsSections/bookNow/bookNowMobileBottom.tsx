import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { PackageDetailsContxt } from 'src/context/packageDetailsContxt';
import { embedPageUrl } from 'src/utils/embedPageUrl';

const BookNowMobileBottom = () => {

  const { asPath } = useRouter();
  const { changeViewHandler } = useContext(PackageDetailsContxt)

  const booKNowBtnHandler = () => {
    changeViewHandler({ label: "Continue", value: "reservation" })
    embedPageUrl(`${asPath}/reservation`)
    window.scrollTo({top: 544 , behavior:'smooth'});
  }
  return (
    <Box className="BookNowMobileBottom">
        <Box className="BookNowMobileBottom__container">
            <Box className="price">
                <Typography className='price__from'>From</Typography>
                <Typography className='price__text'>624 <span className='euroSign'>€</span></Typography>
            </Box>
            <Button onClick={booKNowBtnHandler} className='bookNowBtn'>
                <Typography className='bookNowBtn__text'>Book Now</Typography>
            </Button>
        </Box>
    </Box>
  )
}

export default BookNowMobileBottom