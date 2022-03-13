import React, { createContext, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartAPI } from './Context'

const SingleProduct = ({item}) => {


    
    const {data , setData} = useContext(CartAPI)

  





  return (
    <div className='products'>
     
      
                <img src={item.image} alt={item.image} />

     
                <div className="p-d">
                    <span style={{fontWeight:700}}>{item.name}</span>
                    <span>${item.price.substring(0,3)}</span>
                </div>


        {data.includes(item)? (

                <div className='btn-container'>
                <button className='btn btn-danger'style={{color: '#fff'}} 

                onClick={() => setData(data.filter((c)=> c.id !== item.id))}
                >
                    Remove From Cart
                </button>
                </div>

        ) : (

            <div className='btn-container'>
            <button className='btn btn-primary' style={{color : '#fff'}} onClick={() => setData([...data,item])} >
                Add to Cart
            </button>
        </div> 

        )}

      

     

    </div>

  )
}

export default SingleProduct