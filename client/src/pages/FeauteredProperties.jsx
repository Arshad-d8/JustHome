import React from 'react'
import location_icon from '../assets/location.png'
import bed_icon from '../assets/bed.png'
import wash_icon from '../assets/wash.png'
import space_icon from '../assets/space.png'
import arrow from '../assets/Vector.png'
import { featured } from '../assets/assejs'

export default function FeauteredProperties() {
    return (
        <div className='px-2 sm:px-10 md:px-35 py-20 flex flex-col gap-5 items-center'>
            <div className='text-center flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold '>Featured Properties</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='flex gap-5 justify-center py-3'>
                    <p className='text-xs sm:text-sm font-semibold rounded-full border py-2 px-4 bg-[#FFF8F6]'>All Properties</p>
                    <p className='text-xs sm:text-sm font-semibold py-2'>Villa</p>
                    <p className='text-xs sm:text-sm font-semibold py-2'>Apartments</p>
                    <p className='text-xs sm:text-sm font-semibold py-2'>office</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-5  '>
                {featured.map((item, index) => (
                    <div key={index} className='relative'>
                        <img className='rounded-2xl object-cover' src={item.image} alt="" />
                        <div className='absolute inset-0 flex flex-col justify-between'>
                            <div className='flex gap-3 p-3'>
                                <p className='bg-[#1F4B43] text-white text-xs font-semibold py-2 px-3 rounded-full'>FOR SALE</p>
                                {item.featured && <p className=' bg-[#E7C873] text-xs font-semibold py-2 px-3 rounded-full'>FEATURED</p>}
                            </div>
                            <div className='text-white bg-linear-to-t from-black/70 via-black/50 to-transparent rounded-2xl p-7 flex flex-col gap-2'>
                                <p className='font-semibold'>{item.name}</p>
                                <p className='flex items-center gap-3 text-sm'><img className='h-4 w-4' src={location_icon} alt="" />{item.location}</p>
                                <div className='flex justify-between'>
                                    <div className='text-white flex  gap-3'>
                                        <p className='flex gap-2 items-center text-xs'><img className='h-3 w-4' src={bed_icon} alt="bed-icon" />{item.bed}</p>|
                                        <p className='flex gap-2 items-center text-xs'><img className='h-3 w-4' src={wash_icon} alt="" />{item.toilet}</p>|
                                        <p className='flex gap-2 items-center text-xs'><img className='h-3 w-4' src={space_icon} alt="" />{item.space}</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-xl'>${item.price}{item.month && <span className='text-sm font-normal'>/month</span>}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='flex items-center gap-2 bg-[#E7C873] py-3 px-6 rounded-full font-semibold text-sm'>See All Listing <img className='h-3 w-3' src={arrow} alt="" /></button>
        </div>
    )
}
