import React from 'react'
import SubscriptionSection from './subscriptionSection'
import StudentSection from './studentsection'

const page = () => {
  return (
<>
    <div className='py-40 w-[100%] mx-auto h-[100%] bg-gradient-to-r from-[#f5f6fa] to-[#e0e7ff]'>
      
        <SubscriptionSection/>

        <StudentSection/>
        </div>

      

    
   
    
    {/* <TeamsSection/> */}
    </>
  )
}

export default page