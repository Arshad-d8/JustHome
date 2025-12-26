import React from 'react'
import img from '../assets/d-img.svg'
import palystore from '../assets/applestore.svg'
import applestore from '../assets/playstore.svg'

export default function DownloadTheApp() {
    return (
        <div className='flex flex-col md:flex-row py-10 md:py-0 my-10 mx-2 md:mx-35 rounded-2xl bg-[#1F4B43] justify-between'>
            <div className=' md:px-20 w-full flex flex-col justify-center items-center text-center md:text-start md:items-start gap-5'>
                <p className='text-white bg-white/20 w-fit px-7 text-sm py-2 rounded-full'>Start Today</p>
                <p className='text-white text-2xl font-semibold'>Download the App</p>
                <p className='text-sm text-white'>Take classes on the go with the just home app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                <div className='flex flex-col md:flex-row items-center px-2 md:px-0 md:items-start gap-5 w-full'>
                    <div className='flex bg-white w-full sm:w-1/2  gap-5 px-7 py-2 rounded-xl'>
                        <img className='w-4' src={palystore} alt="" />
                        <span className='w-0.5 h-full bg-black/20 rounded-full'></span>
                        <div>
                            <p className='text-xs text-[#1F4B43]'>Download on the</p>
                            <p className='text-sm text-[#1F4B43] font-semibold'>Apple Store</p>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-1/2 bg-white gap-5 px-7 py-2 rounded-xl'>
                        <img className='w-4' src={applestore} alt="" />
                        <span className='w-0.5 h-full bg-black/20 rounded-full'></span>
                        <div>
                            <p className='text-xs text-[#1F4B43]'>Get in on</p>
                            <p className='text-sm text-[#1F4B43] font-semibold'>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-[40%] hidden md:flex' src={img} alt="" />
        </div>
    )
}
