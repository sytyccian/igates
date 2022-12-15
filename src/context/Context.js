import React, { useContext, useState, useEffect } from "react"

const context = React.createContext()

function AppProvider({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  // remove navbar
  function removeModal(e) {
    setShowModal(false)
  }

  // set up values
  const values = {
    showModal,
    setShowModal,
    showLogo,
    removeModal,
  }
  return <context.Provider value={values}>{children}</context.Provider>
}

export default AppProvider

export function useGlobalContext() {
  return useContext(context)
}
