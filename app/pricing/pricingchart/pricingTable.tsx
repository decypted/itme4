import React from 'react'
import Image from 'next/image'
const PricingTable = () => {
  return (
    <div className='w-[100%] h-full py-5 mx-auto rounded-3xl bg-black/5'>
        <div className=' justify-center items-center w-[90%] mx-auto py-5'>
           <div className='flex space-x-10'>
           <div className='w-[40%]'>
            <span>Essentials</span>
           </div>
            <div className='bg-white rounded-xl p-2 text-sm grid grid-cols-2'>
                <div>
                `<div className='grid gap-2'>
                <span className='font-bold fs text-xl'>Professional</span>
                <p className='flex'><Image src="File_Document.svg" height={20} width={20} alt='Icon'></Image>Automatic Salary Negotiations</p>
                <p> We negotiate your offer by comparing it to the industry standard.</p>
                </div>`
                </div>
                <div>
                `<div className='grid gap-2'>
                <span className='font-bold fs text-xl'>Enterprise</span>
                <p className='flex'><Image src="File_Document.svg" height={20} width={20} alt='Icon'></Image>Automatic Salary Negotiations</p>
                <p> We negotiate your offer by comparing it to the industry standard.</p>
                </div>`
                </div>
            

                




            </div>
           
           </div>
        </div>
    </div>
  )
}

export default PricingTable