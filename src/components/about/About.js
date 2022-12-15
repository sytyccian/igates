import React from "react"
import { TfiAngleDown } from "react-icons/tfi"
import SingleAbout from "./SingleAbout"

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-writeup'>
        <h1>ABOUT US</h1>
        <h3 style={{ color: "darkslategray" }}>WHO WE ARE</h3>
        <p>
          i-Gates Systems Limited is a Next Generation Technology Services
          Provider, specializing solutions development and general information
          communication and technology services. <br /> <br /> We provide
          bespoke solutions tailored to meet specific requirements of our
          clients.
        </p>
        <a className='page-link' href='#projects'>
          <span>
            <TfiAngleDown />
          </span>
          <h5>PROJECTS</h5>
        </a>
      </div>
      <div className='about-content'>
        <SingleAbout />
      </div>
    </div>
  )
}

export default About
