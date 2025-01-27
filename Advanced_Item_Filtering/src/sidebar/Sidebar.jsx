import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import "./sidebar.css"
import "./categories/Category"
import "./price/Price"
import "./colors/Colors"
import Category from './categories/Category';
import Price from './price/Price';
import Colors from './colors/Colors';
const Sidebar = ({handleRadioInputs}) => {
  
  
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1><TiShoppingCart/></h1>
      </div>
      <Category/>
      <Price/>
      <Colors/>
    </section>
    </>
  )
}

export default Sidebar