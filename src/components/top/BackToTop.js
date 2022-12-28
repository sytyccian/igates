import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { ArrowUpward } from "@mui/icons-material"

const BackToTop = () => {
  const [display, setDisplay] = useState("none")

  function showTop() {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > 400) {
      setDisplay("flex")
    } else {
      setDisplay("none")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showTop)

    return () => window.removeEventListener("scroll", showTop)
  })
  return (
    <Box
      sx={{
        display: { display },
        justifyContent: "center",
        alignItems: "center",
        background: "orangered",
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        border: "1px solid orangered",
        color: "white",
        position: "fixed",
        bottom: "100px",
        right: "50px",
      }}
    >
      <a href='#home' style={{ color: "white", textDecoration: "none" }}>
        <ArrowUpward />
      </a>
    </Box>
  )
}

export default BackToTop
