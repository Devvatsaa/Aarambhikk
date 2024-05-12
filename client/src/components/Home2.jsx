import React from 'react'

const Home2 = () => {
  return (
    <div className='flex justify-center bg-amber-100 mt-10 p-10 items-center'>
    <div className="w-[80%] flex gap-10">
        <div className="flex-[1] flex flex-col gap-14">
            <div className="text-5xl w-[80%] leading-tight">With Bestvantage Investments, The Startups in which you are invested poised to be the UNICORN</div>
            <button className='bg-black text-white p-3 rounded-md w-[10rem] hover:bg-gray-500'>See More</button>
        </div>
        <div className="flex-[1]">
            <ul className='flex flex-col gap-3 text-xl text-gray-600 list-disc'>
                <li>All startups on board as well as their founders are rigorously verified by a credible verification agency</li>
                <li>All relevant information available in one place like pitch deck, business model, etc</li>
                <li>We are looking at founders with pedigree or folks who have an in-depth domain experience</li>
                <li>We curate replicable businesses that can create long term value for investor wealth</li>
                <li>We look at parameters that indicate that the startup is poised to be the next Unicorn</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Home2