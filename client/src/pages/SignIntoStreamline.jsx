import React from 'react'
import arrow from '../assets/Vector.png'

export default function SignIntoStreamline() {
  return (
    <div className='mx-2 sm:mx-10 md:mx-35 my-15 bg-[#1F4B43] flex flex-col md:flex-row py-15 md:px-20 gap-5 md:gap-20 justify-evenly rounded-2xl items-center md:items-start'>
      <div className='text-white flex flex-col gap-2 text-center md:text-start'>
        <p className='text-xl'>Sign in to streamline your search</p>
        <p className='text-sm'>Save properties, create alerts and keep track of the enquiries you send to agents.</p>
      </div>
      <button className='bg-[#E7C873] w-fit md:w-full px-5 h-fit py-3 font-semibold text-[#1F4B43] text-sm flex items-center gap-3 rounded-xl'>Sign in or create an account <span><img src={arrow} alt="" /></span></button>
    </div>
  )
}
