import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser, } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../index.css"
import "./navigation.css"
const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text" 
          className='search-Input' 
          placeholder='Enter your Search...' 
        />
      </div>
      <div className="profile-container">
        <a href="#">
        <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUser className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Navigation