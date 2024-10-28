import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css"
const Meals = () => {
    const [meals,setMeals] =  useState([])

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            setMeals(res.data.meals)
        })
        .catch((err)=>{
            console.log("Unable to get API ", err);
        })
    },[])

    const mealss = meals.map(({strMeal,strMealThumb,idMeal})=>{
        return (
            
        <section className='card'>
            
            <img src={strMealThumb} alt={strMeal} />
            <section className='content'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
        )
        
    })
  return (
    <div>
        <h1 className='heading'>Meals-List</h1>
    <div className='items-container'>
        {mealss}
    </div>
    </div>
  )
}

export default Meals