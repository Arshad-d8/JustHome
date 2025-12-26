import React from 'react'
import star from '../assets/stars.svg'
import user from '../assets/text.svg'
import quote from '../assets/quote.png'
import left_arrow from '../assets/left-arrow.svg'
import right_arrow from '../assets/right-arrow.svg'
import logo1 from '../assets/amazon.png'
import logo2 from '../assets/cisco.png'
import logo3 from '../assets/amd.png'
import logo4 from '../assets/dropcom.png'
import logo5 from '../assets/logitech.png'
import logo6 from '../assets/spotify.png'
export default function WhatOurCustomers() {
    return (
        <div className='bg-[#1A1A1A] md:h-screen content-center flex flex-col justify-between'>
            <div className='text-white px-2 sm:px-10 md:px-35 py-10 md:py-0 flex flex-col md:flex-row justify-between gap-10 h-full md:items-center'>
                <div className='md:w-1/2 flex flex-col gap-10 text-center items-center'>
                    <p className='text-4xl font-semibold'>What our customers are <br />saying us?</p>
                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl'>10M+</p>
                            <p className='text-xs'>Happy People</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl'>4.88</p>
                            <p className='text-xs'>Overall rating</p>
                            <div>
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col gap-5 items-center md:items-start'>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex items-center gap-5'>
                            <div><img className='w-15 h-15 md:w-20 md:h-20' src={user} /></div>
                            <div>
                                <p className='font-semibold text-sm md:text-md'>Cameron Williamson</p>
                                <p className='text-sm'>Designer</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='h-5 w-5 md:h-10 md:w-10' src={quote} alt="" />
                            <img src={quote} alt="" className='absolute inset-0 mt-2 md:mt-4 h-5 w-5 md:h-10 md:w-10' />
                        </div>
                    </div>
                    <div className='text-center md:text-start'>
                        <p className=' text-xs md:text-sm font-semibold'>Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.</p>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <p className='border rounded-full p-3 cursor-pointer'><img className='h-3 w-7' src={left_arrow} alt="" /></p>
                        <p className='border rounded-full p-3 cursor-pointer'><img className='h-3 w-7' src={right_arrow} alt="" /></p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 text-center border-t px-10 md:px-35 py-10  border-white/10 text-white'>
                <p className='text-sm'>Thousands of world’s leading companies trust Space</p>
                <div className='flex justify-between'>
                    <img className='w-10 h-3 md:w-20 md:h-6' src={logo1} alt="" />
                    <img className='w-10 h-3 md:w-15 md:h-6' src={logo2} alt="" />
                    <img className='w-10 h-3 md:w-20 md:h-5' src={logo3} alt="" />
                    <img className='w-10 h-3 md:w-20 md:h-5' src={logo4} alt="" />
                    <img className='w-10 h-3 md:w-20 md:h-6' src={logo5} alt="" />
                    <img className='w-10 h-3 md:w-20 md:h-6' src={logo6} alt="" />
                </div>
            </div>
        </div>
    )
}
