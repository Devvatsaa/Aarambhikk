import React from 'react'

const CompayCard = () => {
  return (
    <div className='p-5'>
        <div className="flex gap-4">
            <div className="w-[53px] h-[53px] rounded-[50%] bg-gray-200 flex justify-center items-center">
                <span>logo</span>
            </div>
            <div className="">
              <div className="text-2xl">ResumeBuilder</div>
              <div className="text-gray-400">user friendly on Demand resume build platform</div>
            </div>
        </div>
        <div className="flex justify-between mt-5">
            <div className="flex flex-col items-center gap-1">
               <span className='text-sm text-gray-300'>amount to be raise</span>
               <span className='text-xl'>INR 16 Cr</span>
            </div>
            <div className="flex flex-col items-center gap-1">
               <span className='text-sm text-gray-300'>Dilution</span>
               <span className='text-xl'>10%</span>
            </div>
            <div className="flex flex-col items-center gap-1">
               <span className='text-sm text-gray-300'>Minnimum Invesment</span>
               <span className='text-xl'>INR 10 lakh</span>
            </div>
        </div>
        <button className=''></button>
        <hr/>
    </div>
  )
}

export default CompayCard