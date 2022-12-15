import React from "react"
import { TfiAngleDown } from "react-icons/tfi"

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <div className='intro-details'>
        <h1>IGATES NIG LTD</h1>
        <h2>We create beautiful things</h2>
        <p>
          We are a design and product focused company. We've got the best
          technical hands money can buy. Looking for innovative minds? We've got
          you covered.
        </p>
        <a className='page-link' href='#about'>
          <span>
            <TfiAngleDown />
          </span>
          <h5>ABOUT</h5>
        </a>
      </div>
      <div className='intro-contact'>
        <a href='#contact'>CONTACT</a>
      </div>
    </div>
  )
}

export default Intro
