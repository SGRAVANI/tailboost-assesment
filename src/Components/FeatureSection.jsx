import React from 'react'
import { featureData } from './FeatureData'
import FeatureCard from './FeatureCard'
function FeatureSection() {
   
  return (
   <div className='pb-5'>
   <div className='flex flex-column gap-5 sm:gap-10 sm:items-center justify-center'>
    <div className='W-full sm:w-[48%] hidden sm:block'>
   <div className='w-[95%] mx-auto bg-[green] h-1'></div>
    </div>
    
  <div className='w-full sm:w-[48%] mx-auto text-center sm:text-left '>
    <h1 className='font-[500] text-[40px] text-[#4263cf] leading-[55px] p-0 m-0'>Why Choose Us?</h1>
   <h2 className='font-[700] leading-[55px] text-[40px] p-0 m-0'> What Makes Us Special?</h2>
    </div> 
    </div>
    <div className='mx-auto px-[20px] max-w-[1350px] w-full box-border'>
    
    
    
    <div className='pt-5 pb-5 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-10 '>
    {featureData.map((ele)=><FeatureCard title={ele.title} path={ele.path} key={ele.title} />)}
    </div>
    </div>
    </div>
  )
}

export default FeatureSection