import React, { useState, useEffect } from "react"
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs"
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"
import SinglePartners from "./SinglePartners"
import { partnersData } from "../../data/partnersData"

const Partners = () => {
  const [hoverRight, setHoverRight] = useState(false)
  const [hoverLeft, setHoverLeft] = useState(false)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(partnersData)

  useEffect(() => {
    if (count < 0) {
      setCount(data.length - 1)
    }
    if (count === data.length) {
      setCount(0)
    }
  }, [count])
  return (
    <div className='partners'>
      <div className='partners-content'>
        <SinglePartners count={count} partnersData={data} />
      </div>
      <div className='partners-btn'>
        <button
          className='left-btn'
          onMouseOver={() => setHoverLeft(true)}
          onMouseOut={() => setHoverLeft(false)}
          onClick={() => setCount(count - 1)}
        >
          {hoverLeft ? <HiArrowLeft /> : <BsChevronDoubleLeft />}
        </button>
        <button
          className='right-btn'
          onMouseOver={() => setHoverRight(true)}
          onMouseOut={() => setHoverRight(false)}
          onClick={() => setCount(count + 1)}
        >
          {hoverRight ? <HiArrowRight /> : <BsChevronDoubleRight />}
        </button>
      </div>
    </div>
  )
}

export default Partners
