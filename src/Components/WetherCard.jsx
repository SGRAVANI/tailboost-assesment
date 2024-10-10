import React from 'react'
import { LuThermometerSun } from "react-icons/lu";
import { IoRainy } from "react-icons/io5";
import { MdWindPower } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

export default function WhetherCard({dataType,ext,data}) {
    function getIcon()
    {
        if(dataType=="Temperature")
        {
            return <LuThermometerSun className='text-[80px] text-yellow-500'/>
        }
        else if(dataType=="Humidity")
            {
                return <WiHumidity className='text-[80px] text-green-400'/>
            }
            else if(dataType=="Condition")
                {
                    return <IoRainy  className='text-[80px] text-blue-500'/>
                }
                else if(dataType=="Wind Speed")
                {
                        return <MdWindPower className='text-[80px] text-sky-600'/>
                 }
    }

    
   //Temperature
   //Humidity
   //Condition
   //Wind Speed
  return (
    <div className="flex  justify-between rounded-sm boder-[1px] items-center border-gray-400 " >
        <div>{getIcon()}</div>
        <div className='flex-col items-center justify-center  '>
        <h2>{dataType}</h2>
        <p>{data}{ext}</p>
        </div>
        </div>
  )
}