import React, { useContext, useEffect, useState } from 'react'
import { CartAPI } from './Context'
import SingleProduct from './SingleProduct'

function Cart() {


  const {data , setData} = useContext(CartAPI)
  const [total , setTotal] = useState('')



  useEffect(() => {
    setTotal(data.reduce((x,y) => x + Number(y.price),0))
  },[data])



  return (
    <div className='cart'>
        <h2>My Cart </h2>
        <div className="cart-js">
            <h3>Total Amount : ${total}</h3>
            <button className='btn2 btn-danger' style={{color: '#fff'}} onClick= {() => setData((pre) => [] )} >Clear All</button>
        </div>
        <div className="products--Container">

          {data.map((item)=> (
            <SingleProduct item = { item} key = { item.id } />
          ))}

        </div>
    </div>
  )
}

export default Cart