import React from 'react'
import Hero from './sections/Hero'
import Services from './sections/Services'
import AnimatedStats from './sections/AnimatedStats'
import Features from './sections/Features'
import Testimonials from './sections/Testimonials'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <AnimatedStats />
      <Features />
      <Testimonials />
    </div>
  )
}

export default Home