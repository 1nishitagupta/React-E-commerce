import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name : "About React Store",
    img : "images/about.jpg"
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About