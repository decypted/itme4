"use client"

import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Image from 'next/image'
import Link from 'next/link'
import LinksSection from '@/app/data/links'


const Navbar = () => {
  return (
    <nav className='w-[100%] fixed z-50 text-white  bg-gradient-to-tr border-b[1px] border-black/5 from-[#f5f6fa] to-[#e0e7ff]  backdrop-blur-xl border-b-[1px] '>
      {/* <News/> */}
        <div className='w-[100%] mx-auto px-10 z-50 items-center py-1'>
            <div className='grid grid-cols-2 gap-10 items-center'>
                <div className=' justify-self-start'>
                  <div>
                    <Link href="/">
                    <Image src="/InternMe-Black.svg" width={100} height={100} alt='Logo on Kynite'/>
                    </Link>
                  </div>
                </div>
                <div className='hidden justify-self-center items-center md:flex' > 
                  <LinksSection /> {/* No need for setIsOpen here */}
                </div>
                <div className='block md:hidden justify-self-end items-center '> 
                  <HamburgerMenu/>
                </div>
               
            </div>
        </div>
    </nav>
  )
}

export default Navbar;