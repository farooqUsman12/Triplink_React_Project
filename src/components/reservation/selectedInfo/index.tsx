import { Box } from '@mui/material'
import React from 'react'
import TravelPackage from './travelPackage'
import PriceSummary from './PriceSummary'

const SelectedInfo = () =>  {
  
  return (
    <Box className="SelectedInfo">
        <TravelPackage/> 
        <PriceSummary/>

    </Box>
  )
}

export default SelectedInfo