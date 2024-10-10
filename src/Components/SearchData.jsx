import React, { useState } from 'react'

import { useEffect } from 'react'
import axios from 'axios'
import WhetherCard from './WetherCard'

export default function Search() {
  let [weatherData,setWeatherData]=useState()
  let [city,setCity]=useState("")
  let [f,setF]=useState(false)
  function handleChange(e)
  {
   // setF(true)
    setCity(e.target.value)
    
    
  }
  async function handleClick()
  {
    setF(true)
    fetchData('https://api.weatherapi.com/v1/current.json')
  }
  async function fetchData(url)
  {
    if(city)
    {
    try{
      
    let response= await axios.get(url,
      {
        params:{
    key:"ae898d0822a44b0eb5c135504232811",
    q:city,
    }})
    //console.log(response.data)
    setWeatherData(response.data)
    
    }
    catch(e)
    {
        console.log(e.message)
   alert('Failed to fetch weather data')
    }
    setF(false)
  }
  }
  useEffect(()=>{
  if(!city)
  {
  setWeatherData(null)   
  setF(false) 
  }
  },[city])
  function generateCards()
  {
    if(weatherData)
    {
    let data=['Temperature','Humidity','Condition','Wind Speed'];
    let values=['temp_c','humidity','condition[text]','wind_kph']
    let list=data.map((ele,index)=>{
      let ext;
      if(ele=='Temperature')
      {
        ext="°C"
      }
      else if(ele=='Humidity')
      {
        ext="%"
      }
      else if(ele=="Wind Speed")
      {
        ext=" kph"
      }
      else{
        ext="";
      }
      if(index===2)
      {
        return <WhetherCard dataType={ele} key={index} ext={ext} data={weatherData.current.condition.text} />
      }
      return <WhetherCard dataType={ele} key={index} ext={ext} data={weatherData.current[values[index]]} />
    })
    return list;
    }
  }
  return (
    <div className='text-center w-full '>
        <h1 className='font-bold text-teal-950 text-[30px]'>Search Whether Information </h1>
    <div className='flex gap-2 py-3 w-full items-center justify-center  ' >
        <input type='text' placeholder='Enter city name' value={city} onChange={handleChange} className='text-xl h-[40px] rounded-md border-[2px] w-[60%] px-2'/>
        <button className='px-4 py-2 rounded-lg text-white font-bold bg-blue-500 hover:brightness-75 hover:transition-all duration-500' onClick={handleClick}>Search</button>
    </div>
    {f?  <p className=''>Loading data...</p>:weatherData&&<div className="flex  items-center justify-evenly flex-wrap">
          {  generateCards()}      
      </div>}

  {/* {weatherData&&<div className={styles.cardContainer}>
          {  generateCards()}      
      </div>} */}
    </div>
  )
}