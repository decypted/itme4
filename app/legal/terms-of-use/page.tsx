"use client"

import React from 'react'

import { motion } from 'framer-motion';


const LandingPage = () => {
  const fadeInAnimationVariant = {
    initial: {
        opacity: 0,
        y:50,
        
    },
    animate: {
        opacity: 1,
        y:0,
    }}
    
  return (
    
    <div className='w-[100%] bg-gradient-to-br from-[#f5f6fa] to-[#e0e7ff] h-[100%]'>
      <div className='w-full  lg:max-w-[95%] h-[100%] text-sm  -z-10 border-black/10 py-40 mx-auto max-w-[95%]'>
           <div className=' w-[85%] lg:w-[65%] mx-auto' >
            <div className='text-area grid gap-3'>
                <motion.h1 
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black lg:text-center text-5xl font-black'>
                    TERMS OF USE
                </motion.h1>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black lg:text-center text-md font-medium'>
                    
                    Last updated Feburary 4, 2025
                </motion.p>
            </div>
            {/*  TERM SECTION BELOW */}
            <div className='text-area grid gap-3 mt-20 py-10'>
                <motion.p 
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-lg font-bold'>
                    AGREEMENT TO OUR LEGAL TERMS
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    We are InternMe Corporation (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;).

                    We operate the website <a href="https://temple-esports-web.vercel.app/" className='text-indigo-600 underline'>https://internme.us/</a> (the &quot;Site&quot;), as well as any other related products and services that refer or link to these legal terms under the Saturn Group, collectively known as the parent company (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;), and InternMe Corporation, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <span className='font-bold'>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</span>
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.


                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.


                </motion.p>
            </div>
            {/*  */}
            <div className='text-area grid gap-3 py-10'>
                <motion.p 
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-lg font-bold'>
                    1. OUR SERVICES
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                </motion.p>
            </div>
            {/*  */}
            {/*  */}
            <div className='text-area grid gap-3 py-10'>
                <motion.p 
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-lg font-bold'>
                    2. INTELLECTUAL PROPERTY RIGHTS
                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    
                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).


                </motion.p>
                <motion.p
                variants={fadeInAnimationVariant} 
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{ duration: 1}}
                className='text-black text-[13px] font-medium'>
                    Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                </motion.p>
            </div>
            {/*  */}
           </div>
      
      </div>
    </div>
  )
}

export default LandingPage