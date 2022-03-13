import React, { createContext, useState } from 'react'
import faker from 'faker'
export const CartAPI = createContext();


faker.seed(100)

const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name : faker.commerce.productName(),
    price : faker.commerce.price(),
    image : faker.random.image(),
}))


const Context = ({children}) => {

  const [data , setData] = useState([])

  const [products , setProducts] = useState(productArray)


  return (

    <CartAPI.Provider value={{data,setData,products,setProducts}}>
        {children}
    </CartAPI.Provider>
    
  )
}

export default Context