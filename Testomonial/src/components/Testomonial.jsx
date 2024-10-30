import React, { useState } from 'react'
import "../index.css"
const Testomonial = () => {
    const [index, setIndex] = useState(0)
    const testimonials = [
  { quote: "This service exceeded all my expectations. Absolutely fantastic!", author: "Anna Lee" },
  { quote: "The quality and attention to detail are remarkable. Highly recommend!", author: "Mark Rivera" },
  { quote: "A seamless experience from start to finish. I’m thoroughly impressed.", author: "Sophie Taylor" },
  { quote: "Exceptional customer support and top-quality service!", author: "James Peterson" },
  { quote: "I achieved incredible results. Couldn't have asked for more.", author: "Linda Chen" },
  { quote: "The team was professional, efficient, and very supportive.", author: "David Turner" },
  { quote: "Simply the best experience I’ve had in a long time. Thank you!", author: "Sarah Brown" },
  { quote: "Outstanding value for the price. Truly unmatched in the market.", author: "Paul Anderson" },
  { quote: "They went above and beyond to make sure everything was perfect.", author: "Emma Wilson" },
  { quote: "Impressive from start to finish. They really care about their customers.", author: "Chris Hall" },
  { quote: "I’ve tried many services, but this is by far the best. Will return!", author: "Megan Foster" },
  { quote: "Professional, reliable, and of the highest quality.", author: "Mike Roberts" },
  { quote: "Their attention to detail and commitment to quality is amazing.", author: "Rebecca Young" },
  { quote: "I’ve seen incredible results since using this service.", author: "Kevin Davis" },
  { quote: "An absolute pleasure to work with! Highly recommended.", author: "Olivia Green" },
  { quote: "I’m beyond satisfied. This was exactly what I was looking for.", author: "Anthony Moore" },
  { quote: "Quick, efficient, and very effective. I’m really impressed.", author: "Jessica Martin" },
  { quote: "They truly understand their customers’ needs. Brilliant!", author: "Robert Carter" },
  { quote: "The service was top-notch from start to finish. Thank you!", author: "Alice Clarke" },
  { quote: "It’s rare to find this level of dedication and quality. Amazing.", author: "Sophia Wright" }
];

    const handleNext = ()=>{
        setIndex((index + 1) % testimonials.length)
        
        console.log(index);
        
    } 
    const handlePrev = ()=>{
        setIndex((index + testimonials.length - 1 ) % testimonials.length )
        console.log(index);
    } 
  return (
    <div className='testimonials'>
            <h1>Quotes</h1>
        <div className='testimonials-quote'>
            {testimonials[index].quote}
        </div>

        <div className='testimonials-author'>
            {testimonials[index].author}
        </div>

        <div className='testimonials-nav'>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
        
    </div>
  )
}

export default Testomonial