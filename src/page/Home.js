import React from 'react'
import About from '../component/about/About'
import Footer from '../component/footer/Footer'
import Hero from '../component/hero/Hero'
import Letest from '../component/letest/Letest'
import Section from '../component/section/Section'
import Services from '../component/services/Services'
import TwoCares from '../component/two-cares/TwoCares'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Services />
      <Letest />
      <TwoCares />
      <Section />
      <Footer /> */}
    </>
  )
}

export default Home