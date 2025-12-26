import React from 'react'
import bg from '../assets/real-bg.svg'
import arrow from '../assets/Vector.png'

export default function WeUseRealEstate() {
    return (
        <div className='flex flex-col md:flex-row justify-between md:h-screen px-10 md:px-35 my-20 gap-20'>
            <div className='flex flex-col justify-center text-center md:text-start items-center md:items-start gap-10 md:w-1/2'>
                <p className='text-2xl sm:text-4xl md:text-4xl font-semibold'>We Use Real Estate to Show <br />Our Appreciation of The <br />World</p>
                <p className='text-sm'>Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</p>
                <div className='grid grid-cols-2 gap-10 md:gap-0 md:gap-y-5 '>
                    <div className='flex flex-col gap-3'>
                        <p className='text-4xl font-semibold'>$18M</p>
                        <p className='text-xs'>Owned from properties transactions</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-4xl font-semibold'>15K+</p>
                        <p className='text-xs'>Properties for Sell</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-4xl font-semibold'>26K+</p>
                        <p className='text-xs'>Properties for Buy</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-4xl font-semibold'>890</p>
                        <p className='text-xs'>Daily completed transactions.</p>
                    </div>
                </div>
                <button className='flex items-center gap-2 bg-[#E7C873] py-3 px-6 rounded-xl font-semibold text-sm w-fit'>See All Listing <img className='h-3 w-3' src={arrow} alt="" /></button>
            </div>
            <div className='md:w-1/2'>
                <img className='h-full' src={bg} alt="" />
            </div>
        </div>
    )
}
