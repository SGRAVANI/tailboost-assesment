import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
        <div className='h-full fixed bg-slate-300 top-[15vh] w-[25%] xl:w-[20%] px-2 sm:px-5 pt-5'>
    <div className='flex flex-col gap-6'>
      <NavLink className='text-lg font-bold' to="/dashboard">Dashboard</NavLink>
      <NavLink className='text-lg font-bold' to="/dashboard/mycourses">My Courses</NavLink>
      <NavLink className='text-lg font-bold' to="/dashboard/analytics">Analytics</NavLink>
      <NavLink className='text-lg font-bold' to='/dashboard/accountsetting'>Account Setting</NavLink>
    </div>
  </div>
  )
}

export default SideBar