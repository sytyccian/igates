import React from "react"
import { Box } from "@mui/material"

const Form = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
      }}
    >
      <input type='text' placeholder='Name' />
      <input type='email' placeholder='Email' />
      <input type='text' placeholder='Subject' />
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button>SEND MESSAGE</button>
    </Box>
  )
}

export default Form
