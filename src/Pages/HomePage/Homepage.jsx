import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Pricing from '../../Components/Pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Homepage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Homepage
