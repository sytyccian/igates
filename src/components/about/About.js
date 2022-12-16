import React, { useState, useEffect } from "react"
import { TfiAngleDown } from "react-icons/tfi"
import SingleAbout from "./SingleAbout"
import { aboutData } from "../../data/aboutData"

const About = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < 0) {
      setCount(aboutData.length - 1)
    }
    if (count === aboutData.length) {
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(count + 1)
    }, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [count])

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
        <SingleAbout count={count} aboutData={aboutData} />
        <div style={{ textAlign: "center" }}>
          {aboutData.map((data, index) => {
            return (
              <button
                className={`abt-btn ${count === index && "active"}`}
                key={index}
                onClick={() => setCount(index)}
              ></button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
