import React from 'react'
import logo from '../assets/logo-white.svg'
import phone from '../assets/phone.svg'
import user from '../assets/user.svg'

export default function Navbar() {
  return (
    <div className='absolute w-full py-6 px-8'>
      <div className='flex justify-between items-center'>
        <div>
          <img className='w-30 h-8' src={logo} alt="" />
        </div>
        <div className='hidden md:block'>
          <ul className='text-white flex gap-5 text-sm'>
            <select className='outline-none  font-semibold'>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
            </select>
            <select className='outline-none font-semibold'>
              <option className='text-black' value="Home">Listings</option>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
            </select>
            <select className='outline-none font-semibold'>
              <option className='text-black' value="Home">Members</option>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
            </select>
            <select className='outline-none font-semibold'>
              <option className='text-black' value="Home">Blog</option>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
            </select>
            <select className='outline-none font-semibold'>
              <option className='text-black' value="Home">Pages</option>
              <option className='text-black' value="Home">Home</option>
              <option className='text-black' value="Home">Home</option>
            </select>
            <p className='font-semibold'>Contact</p>
          </ul>
        </div>
        <div className='items-center text-white gap-5 hidden md:flex'>
          <p className='flex items-center text-xs gap-1 font-semibold'> <img className='h-4 w-4' src={phone} alt="" /> +68 685 88666</p>
          <p className='border  rounded-full p-2'><img className='h-4 w-4'  src={user}/></p>
          <button className='border rounded-full px-5 py-2 text-xs font-semibold'>Add Property</button>
        </div>
      </div>
    </div>
  )
}
