import React from 'react'
import {motion} from "framer-motion"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <motion.div
    initial={{x:"100%"}}
    whileInView={{x:0}}
    className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-6 text-white'>
            {/* line */}
            <div className='w-[1px] h-[70px] bg-white'></div>
            {/* social icons */}
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaFacebookF className='text-2xl'/>
            </div>
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaInstagram className='text-2xl'/>  
            </div>
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaTwitter className='text-2xl'/>    
            </div>
            <div className='w-[1px] h-[70px] bg-white'></div>
        </div>
    </motion.div>
  )
}

export default Sidebar
