
import React, { useContext, useEffect, useState } from 'react'
import { CartAPI } from './Context'
import SingleProduct from './SingleProduct'

const Home = () => {


    const {products , setProducts} = useContext(CartAPI)



 


    const {data , setData} = useContext(CartAPI)



    // console.log(data);s
    // const [datas, setDatas] = useState(0)


  return (
    <div>

        <div className="products--Container">
            {products.map((item) => (
                <SingleProduct item = {item} key={item.id}/>
            ))}
        </div>
        

     


    </div>
  )
}

export default Home



