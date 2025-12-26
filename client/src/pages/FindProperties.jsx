import React from 'react'
import { properties } from '../assets/assejs.js'

export default function FindProperties() {
    return (
        <div className='flex flex-col content-center px-10 py-20 md:px-35 md:py-25'>
            <div className='text-center flex flex-col gap-3'>
                <p className='text-3xl font-semibold'>Find Properties in These Cities</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 justify-between py-10 rounded-3xl'>
                {properties.map((item, index) => (
                    <div className='relative  bg-cover bg-center rounded-3xl'>
                        <img className='object-cover w-full rounded-3xl' src={item.image} alt="" />
                        <div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent rounded-3xl h-1/2'></div>
                        <div className='absolute inset-0 p-4 text-white'>
                            <p className=''>{item.name}</p>
                            <p>{item.property} Properties</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
