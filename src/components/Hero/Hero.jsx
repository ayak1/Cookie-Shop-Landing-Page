import React, { useState } from 'react'
import BgImage from "../../assets/Photo by Annie Spratt on Unsplash.jfif"
import CookiesHero from "../../assets/heroCookies.png"
import Navbar from '../Navbar/Navbar'
import {motion} from  "framer-motion"
import Sidebar from '../Sidebar/Sidebar'
const Hero = () => {
    const bgImage = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage} className=''>
        <section className='relative min-h-[750px] w-full '>
            <div className='container'>
                {/* navbar section */}
                <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
                {/* hero section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    {/* Text content section */}
                    <div className='text-lightPink mt-[100px] md:mt-0 p-4 space-y-28'>
                        <motion.h1 
                        initial={{opacity: 0 , y:-100 }} 
                        whileInView={{opacity: 1 , y:0 }} 
                        transition={{ 
                            type: "spring", 
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                            }}
                        className='text-7xl font-bold leading-tight ml-14'>
                            Cookies Yoshi
                        </motion.h1>
                        <motion.div
                        initial={{opacity: 0 , y:100 }} 
                        whileInView={{opacity: 1 , y:0 }} 
                        transition={{ 
                            type: "spring", 
                            stiffness: 100,
                            damping: 10,
                            delay: 1,
                            }}
                             className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Delicious Cookies</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloremque ipsa ea, dignissimos adipisci ut provident? Assumenda cum suscipit commodi, iusto placeat sed aperiam?</h1>
                            </div>
                        <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </motion.div>
                    </div>
                    {/* hero image section */}
                    <div className='relative'>
                        <motion.img src={CookiesHero} alt=""
                         initial={{opacity: 0 , scale:0 }} 
                         whileInView={{opacity: 1 , scale:1 }} 
                         viewport={{once:true}}
                         transition={{ 
                             type: "spring", 
                             stiffness: 100,
                             damping: 10,
                             delay: 0.4,
                             }} 
                        className='relative z-40 h-[300px]  md:h-[500px] img-shadow'/>
                        {/* orange pink ring */}
                        <motion.div 
                         initial={{opacity: 0 , y:100 }} 
                         whileInView={{opacity: 1 , y:0 }} 
                         transition={{ 
                             type: "spring", 
                             stiffness: 100,
                             damping: 10,
                             delay: 0.8,
                             }} 
                        className='h-[180px] w-[180px] absolute top-24 -right-0 border-lightPink  border-[20px] rounded-full z-10'></motion.div>
                        {/* big text section */}
                        <motion.div 
                         initial={{opacity: 0 , x:-100 }} 
                         whileInView={{opacity: 1 , x:0 }} 
                         transition={{ 
                             type: "spring", 
                             stiffness: 100,
                             damping: 10,
                             delay: 0.8,
                             }} 
                        className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-white/50 leading-none'>Cookies Yoshi</h1>
                        </motion.div>

                    </div>
                    {/* third div section */}
                    <div className='hidden lg:block'>
                        <div className='text-lightPink mt-[100px] md:mt-0 p-4 space-y-28'>
                            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>
                                Cookies Youshi
                            </h1>
                            <motion.div
                            initial={{opacity: 0 , y:100 }} 
                            whileInView={{opacity: 1 , y:0 }} 
                            transition={{ 
                                type: "spring", 
                                stiffness: 100,
                                damping: 10,
                                delay: 1,
                                }}
                            className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Delicious Cookies</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio tempora a dicta, sunt eum.</h1>
                                </div>
                            <div className='absolute -top-6 -right-4 w-[250px] h-[190px] bg-darkGray/50'></div>
                            </motion.div>
                        </div>
                    </div>
    
                </div>
            </div>
        {/* sidebar Menu Section */}
        {
            sidebar && (
               <Sidebar/>
            )
        }
        
        </section>
    </main>
  )
}

export default Hero
