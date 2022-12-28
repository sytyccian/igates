import React from "react"
import { Box } from "@mui/material"

const MenuIcon = ({ showSidebar, toggleSidebar }) => {
  return (
    <Box
      onClick={toggleSidebar}
      className={`toggle ${showSidebar && "toggle-it"}`}
      sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Box>
  )
}

export default MenuIcon
