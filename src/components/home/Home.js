import React from "react"
import Contact from "../contact/Contact"
import Intro from "../intro/Intro"
import Products from "../products/Products"
import Subscribe from "../subscribe/Subscribe"
import Projects from "../projects/Projects"
import About from "../about/About"
import Partners from "../partners/Partners"

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Partners />
      <Projects />
      <Products />
      <Subscribe />
      <Contact />
    </>
  )
}

export default Home
