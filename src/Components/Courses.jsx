import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
//import { availabeCourses } from './courseData'
import { Context } from './Context/ContextData'
import { useContext } from 'react'
import AddCourseAlert from './AddCourseAlert'
import { useNavigate } from 'react-router-dom'

function Courses() {
   
    let cont=useContext(Context)
   //let [f,setF]=useState(false)
   //console.log(cont.newCourseAddAlert)
   let navigate=useNavigate()
    let curAvail=cont.curCourseData.filter((ele)=>ele.selected==false)
//console.log(availabeCourses)
useEffect(()=>{

})   

return (
    <div className='pt-[10vh]'>
     <div className='mx-auto px-[20px] max-w-
     [1350px] w-full  my-8 '>
     <div className='flex w-full justify-end pb-2'>
        <button className='px-6 py-3 rounded-lg text-white font-bold bg-[#04564b] hover:brightness-75 hover:transition-all duration-500' onClick={()=>{navigate("/dashboard/mycourses")}}> Go To My Courses </button>
    </div>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-3  sm:grid-cols-2 w-full max-w-[1350px] mx-auto px-20px '>
      {curAvail.map((ele)=><CourseCard courseInfo={ele} key={ele.name}/>)}

     </div>

     </div>
    {cont.newCourseAddAlert &&<AddCourseAlert/>}
    </div>
  )
}

export default Courses