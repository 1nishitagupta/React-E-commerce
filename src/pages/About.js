import React from 'react'
import HeroSection from '../components/HeroSection'
import aboutPic from '../assets/images/about.jpg' 
// import Login from '../components/login/Login'
// import { useLoginContext } from '../context/loginContext'

const About = () => {
  
  const data = {
    name : "About React Store",
    img : aboutPic
  }
  return (
    <>
      <HeroSection myData={data}/>
    {/* <Login/> */}
    {/* <LoginCredentialsData/> */}
    </>
  )
}

export default About