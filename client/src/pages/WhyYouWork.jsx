import React from 'react'
import icon1 from '../assets/Vector1.png'
import icon2 from '../assets/Vector2.png'
import icon3 from '../assets/Vector3.png'

export default function WhyYouWork() {
  return (
    <div className='mx-3 sm:mx-10 md:mx-35 pb-20 flex flex-col gap-10'>

        <div className='text-center flex flex-col gap-3'>
            <p className='text-3xl font-semibold'>Why You Should Work With Us</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-20'>
            <div className='text-center place-items-center flex flex-col gap-3'>
                <p><img src={icon3} alt="icon" /></p>
                <p className='font-semibold text-xl'>Wide Range of Properties</p>
                <p className='text-sm'>We offer expert legal help for all related property items in Dubai.</p>
            </div>
            <div className='text-center place-items-center flex flex-col gap-3'>
                <p><img src={icon2} alt="icon" /></p>
                <p className='font-semibold text-xl'>Buy or Rent Homes</p>
                <p className='text-sm'>We sell your home at the best market price and very quickly as well.</p>
            </div>
            <div className='text-center place-items-center flex flex-col gap-3'>
                <p><img src={icon1} alt="icon" /></p>
                <p className='font-semibold text-xl'>Trusted by Thousands</p>
                <p className='text-sm'>We offer you free consultancy to get a loan for your new home.</p>
            </div>
        </div>
      
    </div>
  )
}
