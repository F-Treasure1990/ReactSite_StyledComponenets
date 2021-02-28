import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import { homeObjThree } from '../HomePage/Data'

const Homepage = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Homepage
