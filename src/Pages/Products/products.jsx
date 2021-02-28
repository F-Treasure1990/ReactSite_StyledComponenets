import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Pricing from '../../Components/Pricing/Pricing'
import {homeObjTwo, homeObjThree, homeObjFour } from '../HomePage/Data'

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Products
