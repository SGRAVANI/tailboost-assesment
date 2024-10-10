
import React, { useEffect, useState } from 'react';
import { Context } from './Context/ContextData';
import { useContext } from 'react';
import Alert from './Alert';
function CourseCard({ courseInfo ,added,duration}) 
{
    let cont=useContext(Context)
    let [durationVal,setDurationVal]=useState('')
    //let [alertData,setAlertData]=useState({f:false,variant:'',msg:""})
    function handleRemove()
    {
        if(added)
        {
            
            let newSelected=cont.selectedCourses.filter((ele)=>{
                if(ele.id!=courseInfo.id)
                {
                    return true
                       } 
              })
              cont.setSelectedCourses(newSelected)
              let newCourseData=cont.curCourseData.map((ele)=>{
                if(ele.id==courseInfo.id)
                {
                    return {...ele,selected:false}
                }
                else{
                    return {...ele}
                }
              })
              cont.setCurCourseData(newCourseData)
              cont.setAlertData({f:true,variant:"success",msg:"course is removed "})
        }
        else{
                    }
    }
    function handleAddUpdate()
    {
        if(added)
        {
            if(durationVal)
            { 
           let newSelected=cont.selectedCourses.map((ele)=>{
            if(ele.id==courseInfo.id)
            {
                return {...ele,duration:durationVal}
            }
            else{
                return ele
            }
           })
           cont.setSelectedCourses(newSelected)
           cont.setAlertData({f:true,msg:"Data updated successfully",variant:"success"})
           //setAlertData()
        }
    }
    else{
        if(durationVal)
        {
            let newSelected=[...cont.selectedCourses,{id:courseInfo.id,duration:durationVal}]
            cont.setSelectedCourses(newSelected);
            let newCourseData=cont.curCourseData.map((ele)=>{
                if(ele.id==courseInfo.id)
                {
                    return {...ele,selected:true}
                }
                else{
                    return {...ele}
                }
              })
              cont.setCurCourseData(newCourseData)
              cont.setAlertData({f:true,msg:"Course Adde successfully",variant:"success"})
              cont.setNewCourseAddAlert(true)
        }
    }
    }
  return (
    <div className='flex flex-col justify-start items-start gap-2 rounded-md border-[1px] border-gray-300 w-full sm:w-[350px] pb-3 overflow-hidden ' >
      <img
        src={courseInfo.path} 
        className='w-full h-[200px]  object-fill hover:scale-105 overflow-hidden '
        alt={courseInfo.name}
      />
      <h1 className='text-lg text-[#1e2c7c] font-bold pl-5'>{courseInfo.name}</h1>
      <p className='px-5'><span className='font-bold'>Mentor - </span> {courseInfo.mentor}</p>
      <p className='px-5'>
        <span className='font-bold'>Fees - </span> <span className='font-bold'>{courseInfo.fees} Rs./-</span>
      </p>
      <p>
        <span className='font-bold pl-5'>Subscription Duration-</span>
        {duration?<span>{duration}</span>:courseInfo.subscription_duration.map((ele) =>(<span key={`${courseInfo.name}-${ele}`} className='pr-[2px]'> {ele} </span>
        ))} Mont.
      </p>
      <form className='flex justify-center items-center flex-col gap-3 mx-auto pt-3 w-[90%]' onSubmit={(e)=>{e.preventDefault()}}>
        <select name="duration" className='sm:w-[80%] w-[95%] h-[40px] px-3' value={durationVal} onChange={(e)=>setDurationVal(e.target.value)} required>
            <option value="">Select Duration(in Months)</option>
          {courseInfo.subscription_duration.map((ele) => (
            <option value={ele} key={`option-${courseInfo.name}-${ele}`}>
              {ele} Month(s)
            </option>
          ))}
        </select>
        <div className='flex gap-4'>
        <button className='px-4 py-2 rounded-lg text-white font-bold bg-gray-950 hover:brightness-75 hover:transition-all duration-500' onClick={handleAddUpdate}>
       {  added?"Update Duration": "Add Course"} 
        </button>
        {added&&<button
        onClick={handleRemove}
        className='px-4 py-2 rounded-lg text-white font-bold bg-red-600 hover:brightness-75 hover:transition-all duration-500'>
       { "Remove Course"}  
        </button>}
        </div>
      </form>
      
    </div>
  );
}

export default CourseCard;