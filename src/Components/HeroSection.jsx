import React from 'react'

function HeroSection() {
  return (

    <div className='bg-[#f4f4fa] mt-[10vh]'>
        <div className='mx-auto px-[20px] max-w-[1350px] w-full box-border'>
    <div className='py-5 flex flex-col justify-center items-center sm:flex-row  gap-4 '>
   <div className='w-full sm:w-[48%] mx-auto text-center sm:text-left '>
    <h1 className='text-[40px] text-[#1e2c7c] font-[700] py-7 lg:text-[55px] leading-[69px] ' >
    Futuristic Transformation Begins Here 
    </h1>
    <div className='flex items-center justify-center sm:justify-start sm:items-start flex-col py-4'>
    <ul className=' text-[20px]  '>

        <li className='flex items-baseline gap-[12px] '>
            <div className='w-[10px] h-[10px] bg-[#4263cf] rounded-full'></div><p>100% Job guarantee</p></li>
            <li className='flex items-baseline gap-[12px] '>
            <div className='w-[10px] h-[10px] bg-[#4263cf] rounded-full'></div>
            
            <p>Pay after placement</p></li>

            <li className='flex items-baseline gap-[12px] '>
            <div className='w-[10px] h-[10px] bg-[#4263cf] rounded-full'></div>
            
           <p> Learn in your own language</p></li>
            <li className='flex items-baseline gap-[12px] '>
            <div className='w-[10px] h-[10px] bg-[#4263cf] rounded-full'></div>
           <p>Learn from industry experts</p>
           </li>

    </ul>
    </div>
    <h3 className='text-[24px] font-extrabold py-4 ' >
    Be cautious. Your click can lend you a dream job. 
    </h3>
    <button className='bg-black text-white text-xl font-bold px-5 py-3 my-4 rounded-md shadow-md' > call-to-action</button>
    </div>
    <div className='w-full sm:w-[48%] mx-auto text-center sm:text-left '>
        <img  className="object-contain p-4 lg:p-6 " src="https://allwebassets.s3.ap-south-1.amazonaws.com/Web+Images/Backgrounds/4q.svg"/> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default HeroSection