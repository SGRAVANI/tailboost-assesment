import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Search from './SearchData'
import { Context } from './Context/ContextData'

import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from 'react'
function Dashboard() {
    const { isAuthenticated, isLoading } = useAuth0();
    let navigate=useNavigate()
    let cont=useContext(Context)
    if(!isAuthenticated)
    {
        navigate('/')
    }
  return (<div>
        <NavBar/>
        
         <div className='max-w-[1350px] w-full mt-[15vh] mx-auto'>
        <div className='flex'>
          {/* Sidebar */}
          <SideBar />

          {/* Dashboard content taking the remaining width */}
          <div className='pl-[30%] xl:pl-[25%] w-full box-border px-5'>
            {/* Placeholder for dashboard content */}
           <Search/>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard