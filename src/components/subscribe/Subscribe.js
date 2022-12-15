import React from "react"
import { BsCheck2, BsInstagram, BsTwitter } from "react-icons/bs"
import { TfiYoutube, TfiFacebook } from "react-icons/tfi"

const Subscribe = () => {
  return (
    <div className='subscribe' id='register'>
      <div className='subscribe-details'>
        <h1>SUBSCRIBE</h1>
        <p>Register now to keep up with latest information</p>
        <h3>Email</h3>
        <input type='email' placeholder='your@email.address' />
        <a className='page-link' href='#'>
          <span>
            <BsCheck2 />
          </span>
          <h5>SUBSCRIBE</h5>
        </a>
      </div>
      <div className='subscribe-icons'>
        <h2>Follow our social media handles</h2>
        <div className='subscribe-btns'>
          <button>
            <BsInstagram />
          </button>
          <button>
            <BsTwitter />
          </button>
          <button>
            <TfiYoutube />
          </button>
          <button>
            <TfiFacebook />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
