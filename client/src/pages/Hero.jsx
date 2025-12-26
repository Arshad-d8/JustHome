import React from 'react'
import arrow from '../assets/Vector.png'
import Navbar from '../components/Navbar'

export default function Hero() {
    return (
        <div className='bg-[url(..\src\assets\hero-bg.jpg)] h-screen md:h-150 bg-cover bg-center '>
            {/* <Navbar /> */}
            <div className='content-center h-full text-white'>
                <div className='flex flex-col gap-8 text-center place-items-center '>
                    <div className='flex justify-center gap-5 text-xs sm:text-sm'>
                        <p>5 Beds</p>
                        <p>2 Baths</p>
                        <p>180 sqft</p>
                    </div>
                    <h1 className='text-2xl sm:text-5xl md:text-5xl font-semibold'>Office Space at <br /> Nortwest</h1>
                    <p className='text-xl font-semibold'>$250<span className='text-sm font-normal'>/month</span></p>
                    <button className='bg-yellow-200 text-black flex text-sm py-4 px-5 items-center gap-2 rounded-xl font-semibold cursor-pointer'>View Details <img src={arrow} alt="arrow" className='h-3 w-3' /> </button>
                </div>
            </div>
        </div>
    )
}
