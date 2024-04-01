import React from 'react'
import OrderModal from '@/components/Modals/OrderModal';
import { FoodCart, InfoCard } from '@/components/ui/index';
import { Box, Stack } from '@mui/material';

const menu = () => {
  return (
    <div>
      <InfoCard></InfoCard>
      <FoodCart></FoodCart>
      <Stack direction={"row"} justifyContent={"center"}><OrderModal></OrderModal></Stack>
    </div>
  )
}

export default menu
