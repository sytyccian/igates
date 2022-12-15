import React from "react"

const SinglePartners = ({ count, partnersData }) => {
  return (
    <div className='partner-details' id='partners'>
      {partnersData.map((data, index) => {
        const { id, name, img } = data
        let position = "next"
        if (index === count) {
          position = "current"
        }
        if (index === count - 1) {
          position = "previous"
        }
        if (count === 0 && index === partnersData.length - 1) {
          position = "previous"
        }
        return (
          <div key={id} className={position}>
            <img src={img} alt={name} />
            <h4 style={{ margin: "10px 0", fontSize: "18px" }}>{name}</h4>
            <h5>PARTNERS</h5>
          </div>
        )
      })}
    </div>
  )
}

export default SinglePartners
