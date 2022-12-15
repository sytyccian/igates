import React, { useState, useEffect } from "react"
import { aboutData } from "../../data/aboutData"

const SingleAbout = () => {
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
    <div className='content-center'>
      {aboutData.map((data, index) => {
        const { title, text, img } = data
        let position = "next"
        if (index === count) {
          position = "current"
        }
        if (index === count - 1) {
          position = "previous"
        }
        if (count === 0 && index === aboutData.length - 1) {
          position = "previous"
        }
        return (
          <div key={index} className={position}>
            <img src={img} alt={title} />
            <p style={{ color: "darkslategray" }}>{title}</p>
            <h4 style={{ margin: "10px 0" }}>{text}</h4>
            <a href='#projects'>View Projects</a>
          </div>
        )
      })}
    </div>
  )
}

export default SingleAbout
