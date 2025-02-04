"use client";

import React, { useState } from 'react';
import Pricing from '../data/pricing';
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
export default function SubscriptionSection() {
 
  const [pricingOption, setPricingOption] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly');

  const handlePricingChange = (option: 'monthly' | 'yearly' | 'lifetime') => {
    setPricingOption(option);
  };

  const slideUPnimation = {
    initial: {
        opacity: 0,
        y:150,
        
    },
    animate: {
        opacity: 1,
        y:0,
    }}

  return (
    <div className='bg-black w-full'>
      <div className='w-full mx-auto'>
        <div className='py-10'>
          <h1 className='text-center from-[#8CFFF9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent mx-auto font-bold text-5xl py-5'>
             It&apos; time to get back in the driver seat.
          </h1>
          <p className='text-center from-[#8CFFF9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent mx-auto text-lg py-5'>
            Kynite is meticously designed to help you quit doom-scrolling on Social Media. 
          </p>
        </div>

        <div className='flex gap-2 justify-center py-5 rounded-full'>
                          <button onClick={() => handlePricingChange('monthly')} className={`py-1 px-2 rounded-full ${pricingOption === 'monthly' ? 'bg-white text-black px-4 py-3' : 'bg-white/10 py-3 px-4 rounded-full transition-all hover:bg-white hover:text-black'}`}>
                            Monthly
                          </button>

                          <button onClick={() => handlePricingChange('yearly')} className={`py-1 px-2 rounded-full ${pricingOption === 'yearly' ? 'bg-white text-black px-4 py-3' : 'bg-white/10 py-3 px-4 rounded-full transition-all hover:bg-white hover:text-black'}`}>
                            Yearly
                          </button>
                          <button onClick={() => handlePricingChange('lifetime')} className={`py-1 px-2 rounded-full ${pricingOption === 'lifetime' ? 'bg-white text-black px-4 py-3' : 'bg-white/10 py-3 px-4 rounded-full transition-all hover:bg-white hover:text-black'}`}>
                            Lifetime
                          </button>
                        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mx-auto w-full py-20'>
          {Pricing.subscriptionTitle.map((name, index) => (
            <motion.div

            initial="initial"
            whileInView="animate"
            variants={slideUPnimation}
            transition={{ duration: 0.7}}

              key={index}
              className={`w-full bg-[#ffffff05] 
                ${index === 0 ? 'rounded-2xl bg-[#0c0f12]' : ''} 
                ${index === Pricing.subscriptionTitle.length - 1 ? 'md:rounded-2xl border-[#FFDCAC] bg-[#0c0f12]  rounded-2xl' : ''} 
                ${index === Math.floor(Pricing.subscriptionTitle.length / 2) ? 'bg-[#0c0c12] border-[#8CFFF9] border-[1px] rounded-2xl' : ''} 
                h-full text-black  border-[1px] border-solid py-10`}
            >
              <div className='w-[90%] mx-auto flex gap-5 items-start text-white'>
                <div className="pricing container">
                  <div className='flex items-center gap-2'>
                    <span className={`text-4xl font-semibold 
                      ${index === Math.floor(Pricing.subscriptionTitle.length / 2) 
                        ? 'from-[#8CFFF9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent' 
                        : index === 0 
                          ? 'text-white' 
                          : 'text-custom-color'}`}
                    >
                      {Pricing.subscriptionTitle[index]}
                    </span>

                    {/* Extra Div for Second Index */}
                    {index === 1 && (
                      <div className='bg-gradient-to-r from-[#8CFFF9] to-[#FFDCAC] text-black text-center py-1 rounded-xl px-5 font-medium text-sm h-[2em] flex justify-center items-center'>
                        <span className='mr-2'>Enhance</span>
                      </div>
                    )}
                  </div>
                
                  <p className='py-5 text-lg text-[#ada8bcb3]'>{Pricing.description[index]}</p>
                  <div className='grid gap-4'>
                    {/*  */}
                    <motion.div 
                    
                    
                    className='grid items-end'>
                    <span className='text-2xl font-bold text-[#d5fafb]'>{Pricing.subscriptionPrice[pricingOption][index]}</span>
                    {pricingOption === 'yearly' && index === 1 && (
                  <p className='text-sm text-[#ada8bcb3]'>or {Pricing.subscriptionPrice.yearlyDescription[0]}</p>
                  )}
                    {pricingOption === 'lifetime' && index === 1 && (
                  <p className='text-sm text-[#ada8bcb3]'>or {Pricing.subscriptionPrice.lifeTimeDescription[0]}</p>
                  )}
                    {pricingOption === 'lifetime' && index === 2 && (
                  <p className='text-sm text-[#ada8bcb3]'>or {Pricing.subscriptionPrice.lifeTimeDescription[1]}</p>
                  )}
                  {pricingOption === 'yearly' && index === 2 && (
                  <p className='text-sm text-[#ada8bcb3]'>or {Pricing.subscriptionPrice.yearlyDescription[1]}</p>
                  )}
                  
                    </motion.div>
                    {/*  */}

                    <div className='flex items-center gap-2  mt-5 rounded-lg px-5'>
                      <div className='flex items-center'>
                        {Pricing.noSessionDepositNeeded[index] ? (
                          <span role="img" aria-label="check"><IoMdCheckmark /></span>
                        ) : (
                          <span role="img" aria-label="cross"><IoMdClose /></span>
                        )}
                      </div>
                      <div className='border-white/20 pl-2 text-sm'>
                        $1 Session Deposit Needed
                      </div>
                    </div>

                    {/* Other feature checks... */}
                    {/* Add other features similarly to the above examples */}
                    {/*  */}
                  <div className='flex items-center gap-2   rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.accountabilityBuddy[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm'>
                      Accountability Buddy
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2  rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.warningsDoomscroll[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm'>
                      Doomscroll Warning
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2   rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.lastChance[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm'>
                      Last chance warning
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2   rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.earnInterest[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm flex gap-1'>
                      <span>Earn interest</span>
                      <span className='text-[#ada8bcb3]'>(if applicable from interest fund)</span>
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2   rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.accountabilityScore[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm flex gap-1'>
                      <span>View Score</span>
                      <span className='text-[#ada8bcb3]'>{Pricing.accountabilityScoreDescriptor[index]}</span>
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2   rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.allowanceControl[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm flex gap-1'>
                      <span>Allocate allowance</span>
                      
                    </div>
                  </div>
                {/*  */}
                  {/*  */}
                  <div className='flex items-center gap-2 rounded-lg px-5'>
                    <div className='flex items-center'>
                      {Pricing.usageTimeMoniter[index] ? (
                        <span role="img" aria-label="check"><IoMdCheckmark /></span>
                      ) : (
                        <span role="img" aria-label="cross"><IoMdClose /></span>
                      )}
                    </div>
                    <div className=' border-white/20 pl-2 text-sm flex gap-1'>
                      <span>Moniter child usage time</span>
                      
                    </div>
                  </div>
                  {/*  */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
