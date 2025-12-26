import React from 'react'
import { recent } from '../assets/assejs'
import arrow from '../assets/arrow.svg'

export default function RecentArticles() {
    return (
        <div className='px-2 py-10  sm:px-10 md:px-35 md:h-screen flex flex-col justify-center gap-10'>
            <div className='text-center flex flex-col gap-3 '>
                <p className='text-4xl font-semibold'>Recent Articles & News</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-5'>
                {recent.map((item, index) => (
                    <div key={index} className='flex flex-col border rounded-xl border-gray-200'>
                        <img className='rounded-t-xl' src={item.image} alt="" />
                        <div className='text-center place-items-center flex flex-col gap-3 p-5'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-gray-600 text-xs'>{item.type}</p> <span className=' w-1 h-1 rounded-full bg-gray-600'> </span> <p className='text-gray-600 text-xs'>{item.date}</p>
                            </div>
                            <p className='text-sm font-semibold'>{item.title}</p>
                            <button className='flex items-center gap-1 text-xs font-semibold'>Read More <img className='w-3 mt-1' src={arrow} alt="" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
