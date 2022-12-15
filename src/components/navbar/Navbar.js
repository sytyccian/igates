import React, { useState, useEffect } from "react"

import { useGlobalContext } from "../../context/Context"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [check, setCheck] = useState(false)

  function remove() {
    const button = document.querySelector("nav button")
    const navBar = document.getElementById("navbar")
    const navHeight = navBar.getBoundingClientRect().height
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navHeight) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      remove()
    })
  })
  const { showModal, setShowModal, showLogo } = useGlobalContext()
  return (
    <nav id='navbar'>
      <img
        src='https://igates.com.ng/images/logo_large.png'
        alt='igates logo'
        className={`${showLogo ? "logo-img" : "no-show"}`}
      />
      <button
        onClick={() => setShowModal(!showModal)}
        className={`${check ? "true" : "no-true"}`}
      >
        {showModal ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar
