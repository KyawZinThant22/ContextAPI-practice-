import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartAPI } from './Context'

const Header = () => {

  const {data} = useContext(CartAPI)

  const handleShow = () => {
    if(data.length > 0) {
      return (
        (data.length)
      )
    }
  }

  return (
    <div className="header-nav">
        <h1>Practice Context API</h1>

        <ul className='nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/cart'>Cart {handleShow()}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header