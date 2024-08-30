import React from 'react'
import AppBannerImg from "../../assets/appbanner.jfif"
import GooglePlay from "../../assets/google_play.png"
import AppStore from "../../assets/app_store.png"
import {motion} from "framer-motion"
const BannerStyle={
    backgroundImage: `url(${AppBannerImg})`,
    backgroundSize: "cover",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
}
const AppBanner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle}
        className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
            <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1
                    initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping:10,
                        delay: 0.2
                    }}
                    className='text-2xl text-center sm:text-4xl font-semibold'>
                        Download the App
                    </motion.h1>
                    <motion.p 
                    initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping:10,
                        delay: 0.3
                    }}
                    className='text-center sm:px-20'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut perspiciatis assumenda.
                    </motion.p>
                    {/* images apps download links */}
                    <motion.div
                    initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping:10,
                        delay: 0.3
                    }}
                     className='flex justify-center items-center gap-4'>
                        <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img
                            initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping:10,
                        delay: 0.4
                    }}
                     src={GooglePlay} alt="" />
                        </a>
                        <a href="#" className='scale-75 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img
                            initial={{opacity:0, y: 100}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping:10,
                        delay: 0.5
                    }}
                     src={AppStore} alt="" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner