import React from 'react'
import {motion} from "framer-motion"
import cookie1 from "../../assets/cookie1.png"
import cookie2 from "../../assets/cookie2.png"
import cookie3 from "../../assets/cookie3.png"
import ServiceCard from './ServiceCard'
const servicesDate=[
  {
    id:1,
    image: cookie1,
    title:"Berries & Cream",
    subtitle:"A tango of strawberries and blueberries, topped with cool whipped cream and a smothering of blueberry topping."
  },
  {
    id:2,
    image: cookie2,
    title:"Peanut Butter Blossom",
    subtitle:"An iconic peanut butter cookie rolled in white sugar and decorated with a rich swoop of fudge frosting."
  },
  {
    id:3,
    image: cookie3,
    title:"Milk Chocolate Chip",
    subtitle:"The classic—you can't go wrong. Thick, soft, and packed with milk chocolate chips."
  }
  
]


const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{
          type:"spring",
          stiffness:150,
          damping:10,
          delay:0.2
        }} 
        className='text-3xl font-bold text-lightGray'>
          fresh and <span className='text-primary'>tasty cookie</span>
        </motion.h1>
        <motion.p
         initial={{opacity:0, scale:0.5}}
         whileInView={{opacity:1, scale:1}}
         transition={{
           type:"spring",
           stiffness:150,
           damping:10,
           delay:0.6
         }} 
        className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae provident, ex quibusdam quis odio.</motion.p>
      </div>
      {/* cards section */}
       <motion.div 
      whileInView={{opacity:1}}
      initial={{opacity:0}}
      transition={{
        duration:0.4,
        delay: 0.1,
        straggerChildren:0.4
      }}
       className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesDate.map((service)=>(
         <ServiceCard service={service}/>
        ))}
       </motion.div>
    </div>
  )
}

export default Services
