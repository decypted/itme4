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
            className='hamburger-menu border-white/10 border-solid border-[1px] bg-white fixed left-0 right-[50%] dark:text-white text-black h-[36em] w-full mx-auto z-50 rounded-2xl mt-5 backdrop-blur-md drop-shadow-xl shadow-lg shadow-black/20'
            
            >
                <div className='w-[90%] mx-auto py-10'>
                    <div className=''>
                    <span></span>
                    <LinksNav setIsOpen={setIsOpen}/>
                    </div>
                   <div className='grid w-[100%] gap-5'>
                   <Link href="/" className='px-5 py-4 bg-blue-700 rounded-xl hover:scale-95 transition-all'>Careers @ Tanova</Link>
                   <Link href="/" className='px-5 py-4 border- blue-700 text-white rounded-xl hover:scale-95 border-[1px]  transition-all'>Life @ Tanova</Link>
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