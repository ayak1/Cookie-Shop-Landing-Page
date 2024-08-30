import React from 'react'
import {motion} from "framer-motion"

const ServiceCard = ({service}) => {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
     whileInView={{opacity:1 , y:0}}
      transition={{
        type:"spring",
        stiffness:150,
        damping:10,
        ease:"easeInput",
        duration:0.4,
        delay:0.2
      }}
     className='text-center p-4 space-y-6' >
    <img className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={service.image} alt="" />
    <div className='space-y-2'>
      <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
      <p className='text-darkGray'>{service.subtitle}</p>
    </div>
  </motion.div>
  )
}

export default ServiceCard