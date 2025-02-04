"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Twirl as Hamburger } from 'hamburger-react'
import LinksNav from '@/app/data/links'
import Link from 'next/link'
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    





  return (
    <div className='hamburger-container max-w-full text-black'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000000" />

        

        




        {isOpen && (
            <motion.div 
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0, }}
            exit={{x: -40}}
            className='hamburger-menu border-white/10 border-solid border-[1px] fixed left-0 right-[50%] dark:text-white text-black h-[36em] w-full mx-auto z-50 backdrop-blur-md drop-shadow-xl shadow-lg shadow-black/20 bg-gradient-to-br from-[#f5f6fa] to-[#e0e7ff]'
            
            >
                <div className='w-[90%] mx-auto py-10 '>
                    <div className=''>
                    <span></span>
                    <LinksNav setIsOpen={setIsOpen}/>
                    </div>
                   <div className=' w-[100%] gap-5 flex'>
                   <Link href="/" className='px-10 py-2  rounded-full hover:scale-95 transition-all text-sm bg-white text-black'>Sign Up</Link>
                   <Link href="/" className='px-10 py-2 border- blue-700 text-white rounded-full hover:scale-95 bg-blue-700 border-[1px]  transition-all'>Login</Link>
                   </div>
                  <div className='py-5'>
                  <span className='py-5 mt-5 text-[12px]'>© 2024 Kynite Corporation. All rights reserved.</span>
                  </div>
                </div>
            </motion.div>
        )}
        

    </div>
  )
}

export default HamburgerMenu