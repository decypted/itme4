import React from 'react'

const NotFound = () => {
  return (
   
    <div className='h-screen w-[100%] mx-auto bg-black flex items-center justify-center flex-col'>
     
    <h1 className='text-4xl font-bold text-center from-[#454ef9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent'>How did you get here?</h1>
   <div className='text-md grid gap-5 py-5 text-center'>
   <p className='text-lg text-[#ada8bc80] font-light'>We don&apos;t know how you quite got here, but this page is unavailable.</p>
   
      
   </div>
   </div>
  )
}

export default NotFound