import React from 'react'
import FeatureProduct from '../components/FeatureProduct'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import homePic from '../assets/images/hero.jpg' 

const Home = () => {
  const data = {
    name : "React Store",
    img : homePic
  }
  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </>

  )
}


export default Home

