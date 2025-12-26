import React from 'react'
import logo from '../assets/logo-white.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";



export default function Footer() {
    return (
        <div className='px-10 md:px-30 py-10 flex items-center bg-[#ececec]'>
            <p className=' hidden md:flex absolute inset right-0 p-3 mr-4 rounded-full bg-black cursor-pointer'><FaArrowUp className='text-white'/></p>

            <div className='flex flex-col md:flex-row gap-4 justify-between md:justify-evenly items-center w-full '>
                <p className='text-sm font-medium'>Copyright©2024.JustHome</p>
                <img className='invert w-30' src={logo} alt="" />
                <div className='flex items-center gap-3'>
                    <p className='cursor-pointer'><FaFacebookF className='text-' /></p>
                    <p className='cursor-pointer'><FaTwitter className='text-' /></p>
                    <p className='cursor-pointer'><FaInstagram className='text-' /></p>
                    <p className='cursor-pointer'><FaLinkedinIn className='text-' /></p>
                </div>
            </div>
        </div>
    )
}
