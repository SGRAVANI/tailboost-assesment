import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './Context/ContextData'
import { useContext } from 'react'
function AddCourseAlert() {
    let cont=useContext(Context)
let navigate=useNavigate()

  return (
    <div className='fixed bg-[rgba(0,0,0,0.4)] z-20 w-full h-[100vh] top-0 left-0'>
    <div className={`border-teal-950 border-[2px]  absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] md:w-[40%] `}>
     <div className='bg-teal-600'>
        <h1 className='py-3 px-1 text-white font-bold text-lg'>Course Added</h1>
     </div>
     <div className='p-3 bg-white'> <h2 className='font-bold'>visit My Course section to view all subscribed courses.
        </h2>
    <p>1. Click on Explore More button to explore more course
    </p>
    <p>2. click on Go To My Courses to see all your subscribed courses
    </p>


      <div className='flex justify-end gap-3 py-3'>
        <button className='px-3 py-2 bg-red-700 text-lg font-bold text-white hover:brightness-110 transition-all duration-150 rounded-lg ' onClick={()=>{ cont.setNewCourseAddAlert(false)}}> Explore More</button>
        <button className='px-3 py-2 bg-blue-800 text-lg font-bold text-white hover:brightness-110 transition-all duration-150 z-10 rounded-lg'
        onClick={()=>{
            cont.setNewCourseAddAlert(false)
            navigate("/dashboard/mycourses")}}
        >Go To My Courses</button>
      </div>
     </div>

    </div>
    </div>
  )
}

export default AddCourseAlert