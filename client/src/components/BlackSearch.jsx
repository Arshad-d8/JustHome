import React from 'react'
import filter_icon from '../assets/filter.png'

export default function BlackSearch() {
  return (
    <div className='bg-[#1A1A1A] md:h-20 md:w-200 mx-3 sm:mx-10 md:m-auto my-5 md:my-0 md:-mt-10 content-center rounded-3xl'>
      <form className='flex flex-col gap-5  md:flex-row justify-between items-center md:gap-3  px-5 py-4 md:py-0'>
        <div className='w-full'>
          <p className='text-gray-400 text-xs'>Keyword</p>
          <input type="text" placeholder='Enter Keyword' className='placeholder:text-white placeholder:text-sm text-white w-full outline-none' />
        </div>
        <div className='w-full'>
          <p className='text-gray-400 text-xs'>Status</p>
          <select className='text-white text-sm pr-10 w-full outline-none'>
            <option className='text-black' value="">All Status</option>
            <option className='text-black' value="confirmed">confirmed</option>
            <option className='text-black' value="not confirmed">not confirmed</option>
            <option className='text-black' value="nothing">nothing</option>
          </select>
        </div>
        <div className='w-full'>
          <p className='text-gray-400 text-xs'>Type</p>
          <select className='text-white text-sm pr-10 w-full outline-none'>
            <option className='text-black' value="">All Type</option>
            <option className='text-black' value="confirmed">confirmed</option>
            <option className='text-black' value="not confirmed">not confirmed</option>
            <option className='text-black' value="nothing">nothing</option>
          </select>
        </div>
        <div className='flex gap-3 md:gap-1 flex-col md:flex-row w-full'>
          <button className='text-white border-white/25 flex items-center gap-2 border  py-2 px-5 rounded-xl justify-center '><img className='h-3 w-3' src={filter_icon} />Filter</button>
          <button className='bg-[#E7C873] py-2 px-5 rounded-xl '>Search</button>
        </div>
      </form>
    </div>
  )
}
