import React, { useState, useEffect } from "react"

import { Container } from "@mui/material"
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Partners from "./components/partners/Partners"
import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Sidebar from "./components/sidebar/Sidebar"
import BackToTop from "./components/top/BackToTop"

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  function removeSidebar() {
    setShowSidebar(false)
  }

  function makeActive() {
    const windowHeight = window.innerHeight
    const elements = document.querySelectorAll(".reveal")

    elements.forEach((element) => {
      const top = element.getBoundingClientRect().top
      if (top < windowHeight) {
        element.classList.add("active")
      } else {
        element.classList.remove("active")
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", makeActive)

    return () => window.removeEventListener("scroll", makeActive)
  })

  return (
    <Container sx={{ position: "static" }}>
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Intro />
      <Partners />
      <About />
      <Clients />
      <Services />
      <Contact />
      <Sidebar showSidebar={showSidebar} removeSidebar={removeSidebar} />
      <BackToTop />
    </Container>
  )
}

export default App
