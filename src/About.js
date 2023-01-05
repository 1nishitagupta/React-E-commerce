import React from 'react'
import HeroSection from './components/HeroSection'
import aboutPic from './assets/images/about.jpg' 

const About = () => {
  const data = {
    name : "About React Store",
    img : aboutPic
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About