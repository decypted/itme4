"use client"

import React, { useState } from 'react';
import Teams from '@/app/data/teams';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamsSection() {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className='w-[100%] bg-gradient-to-r from-[#f5f6fa] to-[#e0e7ff] h-[100%] py-20 text-black overflow-hidden'>
      <div className='w-[90%] mx-auto '>
        <div className=''>
        <h1 className='text-center text-black mx-auto font-bold text-5xl'>Meet the  Team</h1>
        <p className='text-center  mx-auto text-lg py-5'>
          We lead with purpose — our core principle — and a shared vision of empowering people economically and in life. Get to know the people at InternMe.
        </p>
        </div>

        <div className='md:gap-10  mx-auto w-[100%] md:grid-cols-1 lg:flex  md:grid space-y-5 md:space-y-0'>
          {Teams.team.map((name, index) => (
            <div key={index} className='w-[100%] md:w-[100%] lg:w-[100%] bg-white rounded-xl h-[100%] text-black border-white/20 border-[1px] border-solid'>
              <div className='w-[90%] mx-auto py-10 flex gap-5 items-start'>
                {/* Fixed height for the image container */}
                <div className="flex-shrink-0 h-[50px] w-[50px]">
                  <Image src={Teams.avatar[index]} height={50} width={50} alt='' className='rounded-full' />
                </div>
                <div className='flex flex-col items-start'>
                  <span className='text-3xl font-bold'>{name}</span>
                  <span className='block'>{Teams.role[index]}</span>
                 
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={visibleIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className='mt-2 text-[14px]'>{Teams.description[index]}</p>
                  </motion.div>
                  <div>
                    <button 
                      className='text-blue-500' 
                      onClick={() => toggleDescription(index)}
                    >
                      {visibleIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
