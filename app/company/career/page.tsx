import React from 'react'
import Profile from '@/app/data/profile'
import Link from 'next/link'

const page = () => {
  return (
<>
    <div className='py-40 w-[90%] md:w-[90%] mx-auto h-[100%]'>
    
        <div className='grid gap-5 md:md:w-[70%] mx-auto'>
            <h1 className='text-5xl text-center text-black font-bold py-5'>{Profile.company.title}</h1>
            <p className='text-center text-black text-lg py-5'>{Profile.company.textDescriptor}</p>
            <div className='mx-auto w-[100%] flex justify-center gap-5'>
        <Link href="/" className='px-5 py-2 bg-blue-700 text-white rounded-full hover:scale-95 transition-all'>Careers @ Kynite</Link>
        <Link href="/" className='px-5 py-2 border-blue-700 border-solid border-[1px] rounded-full hover:scale-95 transition-all'>Life @ Kynite</Link>
        </div>

        <div>
          career
        </div>
        </div>
       
       
     
    
   
    </div>
    {/* <TeamsSection/> */}
    </>
  )
}

export default page