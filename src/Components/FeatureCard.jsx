import React from 'react'

function FeatureCard({path,title}) {
  return (
    <div className='flex flex-col items-center justify-center py-4 px-2 shadow-[0_0_15px_3px_rgba(0,0,0,0.2)] rounded-md text-center '>
     <img src={path} alt={title} className='w-[100px] h-[100[px] py-2'/>
     <p className='py-2'>{title}</p>
    </div>
  )
}

export default FeatureCard