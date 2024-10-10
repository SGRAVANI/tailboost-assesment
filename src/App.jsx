import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './Components/Login'
import "./index.css"
import Auth0Demo from './Components/Auth0Demo'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import Footer from './Components/Footer'
import { Routes,Route,Outlet } from 'react-router-dom'
import HomePage from './Components/HomePage'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Courses from './Components/Courses'
import Dashboard from './Components/Dashboard.jsx'
import Analytics from './Components/Analytics.jsx'
import MyCourses from './Components/MyCourses.jsx'
import AccountSetting from './Components/AccountSetting.jsx'
import { Context } from './Components/Context/ContextData.jsx'
import Alert from './Components/Alert.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
function App() {
 let cont=useContext(Context)
  return (
    <>
     {/* <LoginButton />
     <Auth0Demo/> */}
     

      <NavBar/>
      
      <Outlet/>
     {cont.f&&<Alert/>}
     <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>} />
     <Route path="/courses" element={<Courses/>} />
     <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
     <Route path="/dashboard/analytics" element={<Analytics/>} />
     <Route path="/dashboard/mycourses" element={<MyCourses/>} />
     <Route path="/dashboard/accountsetting" element={<AccountSetting/>} />
     </Route>
     </Routes>
     
     </>
  )
}

export default App
