import React from 'react';
import Image from 'next/image';

const WhatSetsUsApart = () => {
  return (
    <div className='w-[95%] bg-[#4735ce] py-20 mx-auto rounded-3xl'>
      <div className='w-[95%] mx-auto'>
        <span className='text-white fs text-2xl'>What sets InternMe apart</span>
      </div>
      <div className='w-[95%] flex mx-auto space-x-20'>
        {/* First Column */}
        <div className='bg-indigo-900 rounded-xl h-full mt-10 flex w-[70%]'>
          <div className='w-[90%] mx-auto text-white'>
            <div className='w-[80%] mx-auto'>
              <p className='fs text-2xl py-20'>More clarity and ease</p>
              <p className='py-10'>
                Connect strategic goals to your job hunt that help you achieve them. See your progress
                progress in real time, updates from companies, and keep your job hunt
                on track.
              </p>
            </div>
          </div>
          <div className='w-[90%] h-full overflow-hidden rounded-tr-xl rounded-br-xl'>
            <Image
              src="/WEB-homepage-goals-en_us.webp"
              height={400}
              width={400}
              alt='txt'
              className='object-cover w-full h-full'
            />
          </div>
        </div>
        {/* Second Column */}
        <div className='bg-white rounded-xl h-full mt-10  w-[30%]'>
          <div className='w-[90%] mx-auto text-black  '>
            <div className='w-[90%] mx-auto'>
              <p className='fs text-2xl py-20'>Amplify your hunt with AI</p>
              <p className='py-10'>
              Hunt for new opportunites smarter and faster with AI-powered flows that take on your grueling search for you.
              </p>
            </div>
          </div>
          <div className='w-[90%] h-full overflow-hidden rounded-tr-xl rounded-br-xl'>
            {/* <Image
              src="/WEB-homepage-goals-en_us.webp"
              height={400}
              width={400}
              alt='txt'
              className='object-cover w-full h-full'
            /> */}
          </div>
        </div>
       {/*  */}
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
