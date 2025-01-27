import React, { useState } from 'react'
import Navigation from './navigation/Navigation'
import Products from './products/Products'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'
import ProductDatas from "./db/data.jsx"
import Card from './components/Card.jsx'
const App = () => {
const [category,setCategory] = useState(null)
const [query,setQuery] = useState("") // User inputs

//  filter by Input : 

const filterItems = ProductDatas.filter((products) =>
  products.title.toLowerCase().includes(query.toLowerCase())
);

    const handleInput = event =>{
      setQuery(event.target.value)
    }

// filter by radio inputs : 

    const handleRadioInputs = event =>{
      setQuery(event.target.value)
    }

// filter by Buttons :
    const handleButtons = event =>{
      setQuery(event.target.value)
    }

//  filtering all Items :

const filterAllProducts = (products, selected, query) => {
  let filteredProducts = products;

  // Filter by query
  if (query) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter by selected category or attribute
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, newPrice, title, color, company }) =>
        category === selected ||
        title === selected ||
        color === selected ||
        newPrice === selected ||
        company === selected
    );
  }

  // Map to create Card components
  return filteredProducts.map(
    ({ img, category, title, company, prevPrice, newPrice, star, reviews, color }) => (
      <Card
        img={img}
        category={category}
        title={title}
        company={company}
        prevPrice={prevPrice}
        newPrice={newPrice}
        star={star}
        reviews={reviews}
        color={color}
        key={title} // Add a unique key for each item
      />
    )
  );
};


 const result = filterAllProducts(ProductDatas,category,query)
  return (
    <>
    <Sidebar handleRadioInputs={handleRadioInputs}/>
      <Navigation query ={query} handleInput= {handleInput} />
      <Recommended handleButtons= {handleButtons}/>
      <Products result = {result}/>
    </>
  )
}

export default App