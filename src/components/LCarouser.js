// https://www.youtube.com/watch?v=XJSOgV4VELk&ab_channel=YourCodeLab

import { useEffect, useState } from "react"

export default function Mycarousel({
  children: slides,
  autoSlideInterval=3000,
}){
  const[curr, setCurr]=useState(0)

  const autoSlide =true;

//   const prev =()=>
//     setCurr((curr)=>(curr===0 ? slides.length-1 : curr-1))

  const next =()=>
    setCurr((curr)=>(curr===slides.length-1 ? 0 : curr+1))

  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(next,autoSlideInterval)
    return ()=> clearInterval(slideInterval)
  })

  return (
    <div className="overflow-hidden rounded-lg" >
      <div className="flex flex-row transition-transform ease-out duration-500"
        style={{transform: `translate(-${curr*(100/ slides.length)}%)`}}
      >
        {slides.map((slide, index) => (
          <div key={index} >
            {slide}
          </div>
        ))}
        {slides.map((slide, index) => (
          <div key={index} >
            {slide}
          </div>
        ))}
        {slides.map((slide, index) => (
          <div key={index} >
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}