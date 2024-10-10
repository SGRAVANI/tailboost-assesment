import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full box-border'>
    <div className='bg-black  w-full '>
         <div className='mx-auto px-[20px] max-w-[1350px] w-full box-border'>
            <div className='py-10 flex justify-between items-center text-white '>
                <a href='#'>Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <div className='flex items-center gap-2 sm:gap-4 '>
                  <div className='p-1 bg-white rounded hover:scale-125'>
                    <a href="#">
                  <FaYoutube className='text-red-500 text-lg'/>
                  </a>
                  </div>
                  <div className='p-1 bg-white rounded hover:scale-125'>
                    <a href="#">
                  <FaFacebook className='text-blue-900 text-lg'/>
                  </a>
                  </div>
                 
                  <div className='p-1 bg-white rounded hover:scale-125'>
                  <a href="#">
                  <GrInstagram className='text-pink-500 text-lg'/>
                  </a>
                  </div>
                  <div className='p-1 bg-white rounded hover:scale-125'>
                    <a href="#">
                  <FaSquareXTwitter className='text-blue-600 text-lg'/>
                  </a>
                  </div>
                </div>
            </div>
    </div>
    </div>
    <div className='bg-[#313131] text-[#999] text-sm flex justify-between  items-center lg:px-[300px] sm:px-[50px] px-[10px] sm:py-[15px] md:px-[30px] gap-10 py-[6px]'>
        <p>Copyright@2024</p>
        <p>EduTech+ Pvt Ltd.</p>
        <p>All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer