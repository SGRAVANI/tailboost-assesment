import React, { useState } from 'react'
import { Context } from './ContextData'
import { availabeCourses } from '../courseData'
let subscribedCourses=[
    {
    id:1,
    duration:3
    },
]
function ContextState(props) {

    let [curCourseData,setCurCourseData]=useState(availabeCourses);
    let [selectedCourses,setSelectedCourses]=useState(subscribedCourses)
    let [alertData,setAlertData]=useState({f:false,variant:"",msg:""})
    let [newCourseAddAlert,setNewCourseAddAlert]=useState(false)
    let [isAuth,setIsAuth]=useState(false)
  return (
    <Context.Provider value={{curCourseData,setCurCourseData,selectedCourses,setSelectedCourses,alertData,setAlertData,
        newCourseAddAlert,
        setNewCourseAddAlert,
        isAuth,
        setIsAuth

    }}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextState