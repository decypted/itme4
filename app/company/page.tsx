import React from 'react'
import Profile from '../data/profile'
import TeamsSection from './teams/teams'
import Link from 'next/link'
import Bentobox from './bentobox'

const page = () => {
  return (
<>
    <div className='py-40 w-[100%] mx-auto h-[100%] bg-gradient-to-r from-[#f5f6fa] to-[#e0e7ff]'>
        <div className='grid gap-5 md:w-[60%] mx-auto w-[95%]'>
            <h1 className='text-4xl md:text-5xl text-center bg-clip-text bg-gradient-to-tr mx-auto font-medium py-5'>{Profile.company.title}</h1>
            <p className='text-center text-md py-5'>{Profile.company.textDescriptor}</p>
            <div className='mx-auto w-[100%] flex justify-center gap-5'>
        <Link href="/" className='px-5 py-2 from-[#928cff] to-[#fee4a8] bg-gradient-to-tr text-black rounded-full hover:scale-95 transition-all'>Looking for a job?</Link>
        <Link href="/" className='px-5 py-2 bg-white  border-solid border-[1px] rounded-full hover:scale-95 transition-all'>Life at InternMe</Link>
        </div>
        </div>
       
       
       <TeamsSection/>
       <Bentobox/>
    
   
    </div>
    {/* <TeamsSection/> */}
    </>
  )
}

export default page