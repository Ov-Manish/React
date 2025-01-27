import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
const Card = ({ img, category, title, company, prevPrice, newPrice, star, reviews, color }) => {
  return (
    <>
     <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className='card-image' alt="Nike Air Shoe" />
        <div className="card-details">
          <h3 className="card-title">
            something
          </h3>
          <section className="card-reviews">
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            <FaStar className='rating-star'/>
            
            <span className="total-reviews">
              4
            </span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>200
            </div>
            <div className="bag">
              <IoBagCheck className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Card