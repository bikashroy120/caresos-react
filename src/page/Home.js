import React from 'react'
import About from '../component/about/About'
import Hero from '../component/hero/Hero'
import Letest from '../component/letest/Letest'
import Services from '../component/services/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Letest />
    </>
  )
}

export default Home