import React from 'react'
import arrow from '../assets/Vector.png'

export default function Discover() {
  return (
    <div className='bg-[url(..\src\assets\discover-bg.jpg)] bg-cover bg-center h-130 my-10 text-center place-items-center flex flex-col justify-center gap-10'>
        <p className='text-white text-2xl sm:text-5xl md:text-5xl font-semibold md:leading-14'>Discover a place you'll <br /> love to live</p>
        <p className='text-white text-sm'>Pellentesque egestas elementum egestas faucibus sem. Velit nunc <br />egestas ut morbi. Leo diam diam</p>
        <button className='flex items-center gap-2 bg-[#E7C873] py-3 px-6 rounded-xl font-semibold text-sm'>See All Listing <img className='h-3 w-3' src={arrow} alt="" /></button>
    </div>
  )
}
