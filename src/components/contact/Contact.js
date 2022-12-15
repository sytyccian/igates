import React from "react"

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-info'>
        <h1>GET IN TOUCH</h1>
        <p>We would love to hear from you</p>
        <p>Get in touch with us today lets bring your plans to reality.</p>
        <section>
          <aside>
            <h2>Contact</h2>
            <h3>Call: + 234 9093 542 599</h3>
            <p>Email: info@igates.com.ng</p>
          </aside>
          <aside>
            <h2>Address</h2>
            <p>112 Aba Road Garrison, Port Harcourt Nigeria</p>
          </aside>
        </section>
      </div>
      <div className='contact-form'>
        <form>
          <label>Write a message</label>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea
            name=''
            id=''
            cols='30'
            rows='6'
            placeholder='Message'
          ></textarea>
        </form>
        <button>SEND NOW</button>
      </div>
    </div>
  )
}

export default Contact
