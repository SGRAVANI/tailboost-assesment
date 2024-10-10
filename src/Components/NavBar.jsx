import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginPage from './Login'
function NavBar() {
  return (
    <div className='bg-[white] fixed mx-auto w-full box-border top-0 '>
    <div className=' px-[20px] max-w-[1350px]  flex items-center mx-auto  justify-between  '>
    <div className='flex justify-between items-center w-full flex-wrap'>
    <NavLink className='font-bold sm:text-[35px] text-[25px]'
    to="/"
    ><span className='text-[rgb(10,140,123)]'>Edu</span><span></span>Tech+</NavLink>
    <ul className='flex flex-row sm:justif-end gap-1 sm:gap-10 px-0 sm:px-5 items-center justify-evenly h-[10vh] '>
   <li className='md:text-xl font-semibold '>
    <NavLink to="/"> Home </NavLink></li>
   <li className='md:text-xl font-semibold '>
    <NavLink to="/about">About</NavLink></li>
   <li className='md:text-xl font-semibold'>
    <NavLink to="/courses">Courses</NavLink></li>
   <li  className='md:text-xl font-semibold'>
    
    <NavLink to="/contact">Contact </NavLink>
    </li>
    <li>
    <LoginPage/>
    </li>
    
    </ul>
   
       
    
    </div>
    </div>
    </div>
  )
}

export default NavBar