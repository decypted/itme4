import React from 'react'
import Link from 'next/link'
const StudentSection = () => {
  return (
    <div className='py-10 mx-auto w-[70%]'>
         <p className='text-center from-[#8CFFF9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent mx-auto font-bold text-5xl py-10 '>
            Are you a student?
          </p>
          <p className='text-md text-white/50 text-center font-light'>Exciting news! You could enjoy Kynite for free! Just submit your Kynite Scholarship application, and if we see your commitment, you&apos;ll receive 6 months of Kynite Enhanced at no cost. If you&apos;re a student, you can also get 50% off—just provide your ID for verification without the scholarshihp.</p>

          <div className='flex justify-center items-center py-5'>
            <Link href="/" className='from-[#8CFFF9] to-[#FFDCAC] bg-gradient-to-tr rounded-full py-2 px-5 text-black'>Coming soon</Link>
          </div>
    </div>
  )
}

export default StudentSection