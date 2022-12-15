import React from "react"
import { useGlobalContext } from "../../context/Context"

const Modal = () => {
  const { showModal, removeModal } = useGlobalContext()
  return (
    <div className={`${showModal ? "modal" : "no-modal"}`}>
      <div className='modal-content'>
        <a href='#home' onClick={removeModal}>
          HOME
        </a>
        <a href='#about' onClick={removeModal}>
          ABOUT
        </a>
        <a href='#partners' onClick={removeModal}>
          PARTNERS
        </a>
        <a href='#projects' onClick={removeModal}>
          PROJECTS
        </a>
        <a href='#products' onClick={removeModal}>
          PRODUCTS
        </a>
        <a href='#register' onClick={removeModal}>
          REGISTER
        </a>
        <a href='#contact' onClick={removeModal}>
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Modal
