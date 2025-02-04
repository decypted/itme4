import React from 'react'

const page = () => {
  return (
    <div className='w-[100%] bg-black py-20 h-[90em]'>
        <div className='w-[90%] lg:w-[95%] text-sm mt-[5em] -z-10  py-10 mx-auto '>
            <div className='grid w-[100%] lg:w-[70%] mx-auto px-10 gap-10'>
                <h1 className='gt-walsh text-5xl font-bold'>Refund Policy</h1>
                <span className='gt-walsh font-normal'>Last updated 6/21/2024</span>
                <div className='grid  gap-10'>
                <div>
                    <span>
                    We have a 14-day return policy, which means you have 14 days after receiving your item to request a return.
                    </span>
                </div>
                <div>
                    <span>
                        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.
                    </span>
                </div>
                <div>
                    <span>
                        To initiate a return, you can contact us at support@templesgg.org.
                    </span>
                </div>
                <div>
                    <span>
                    Items sent back to us without first requesting a return will not be accepted.
                    </span>
                </div>
                <div>
                    <p className='font-bold'>
                    European Union 14 day cooling off period
                    </p>
                    <span>
                    Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.
                    </span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page