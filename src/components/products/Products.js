import React from "react"
import { productsData } from "../../data/productsData"

const Products = () => {
  return (
    <div className='products' id='products'>
      <h1>SOME OF OUR PRODUCTS</h1>
      <p>
        We have a range of products that meet the need of different users and
        organizations
      </p>
      <div className='products-center'>
        {productsData.map((products) => {
          const { id, name, info, img } = products
          return (
            <div key={id}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <p>{info}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
