import React from 'react'
import OrderModal from '@/components/Modals/OrderModal';
import { FoodCart, InfoCard } from '@/components/ui/index';

const menu = () => {
  return (
    <div>
      <InfoCard></InfoCard>
      <FoodCart></FoodCart>
      <OrderModal></OrderModal>
    </div>
  )
}

export default menu
