import React from 'react'
import message_icon from '../assets/message.svg'
import arrow_icon from '../assets/arrow.svg'

export default function StayUpToDate() {
    return (
        <div className=' px-5 md:py-0 flex flex-col items-center my-30 gap-5 text-center'>
            <p className='bg-[#E7C873] p-5 rounded-full'><img className='w-10' src={message_icon} alt="" /></p>
            <p className='text-3xl font-semibold'>Stay Up To Date</p>
            <p className='text-sm'>Subscribe to our newsletter to receive our weekly feed.</p>
            <div className='flex gap-2 border border-gray-300 rounded-full w-fit px-3 md:px-6 py-4'>
                <input type="text" placeholder='Your e-mail' className='placeholder:text-black/80 outline-none md:pr-45' />
                <button className='flex items-center gap-1 cursor-pointer font-semibold'>Send <img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}
