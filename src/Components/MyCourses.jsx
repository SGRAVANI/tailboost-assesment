import React, { useEffect, useState } from 'react'
//import { availabeCourses } from './courseData'
import CourseCard from './CourseCard';

import { Context } from './Context/ContextData';
import { useContext } from 'react';
import Alert from './Alert';
import { Navigate, useNavigate } from 'react-router-dom';


function MyCourses() {
    let cont=useContext(Context)
    let [data,setData]=useState([])
    let navigate=useNavigate()
    function getCourses()
    {
        let courseData=[];
        for(let course of cont.curCourseData)
        { 
        for(let i=0;i<cont.selectedCourses.length;i++)
        {
        if(cont.selectedCourses[i].id==course.id)
        {
            console.log(course)
         courseData.push({...course,duration:cont.selectedCourses[i].duration})
        }
       // console.log(courseData)
       
        }
        
        }
        setData(courseData)
    }
     //let courseData=getCourses()

    useEffect(()=>{
       //  courseData=getCourses()
       getCourses()
    },[cont.curCourseData,cont.selectedCourses])
    function handleNewCourse(){
     navigate("/courses")
    }
//console.log(courseData)
    return data.length==0? (<>
    
  <div className='pt-5 text-center'>
    <h1 className='pb-8 font-bold text-[30px]  text-center'>My Courses</h1>
    <h1 className='text-blue-950 text-center font-bold text-xl pb-3'>You Haven't subscribed any course. kindly add course</h1>
    <button className='px-6 py-3 rounded-lg text-white font-bold bg-[#04564b] hover:brightness-75 hover:transition-all duration-500' onClick={handleNewCourse}> Add New Course </button>

  </div>
  </>):(<>
    <h1 className='pb-5 font-bold text-[30px]  text-center pt-5'>My Courses</h1>
  <div className='flex w-full justify-end'>
        <button className='px-6 py-3 rounded-lg text-white font-bold bg-[#04564b] hover:brightness-75 hover:transition-all duration-500' onClick={handleNewCourse}> Add New Course </button>
    </div>
    <div className='flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-center sm:flex-wrap py-5' >
    
    {data.map((ele)=><CourseCard courseInfo={ele} added={true} duration={ele.duration} key={`subscribed-${ele.id}`}/>)}

    </div>
    
    {cont.alertData.f && <Alert/>}
    </>
  )
}

export default MyCourses