import React, { useEffect, useState } from 'react'
import { Context } from './Context/ContextData'
import { useContext } from 'react'
function Alert() {
    let cont=useContext(Context)
//  let [f,setF]=useState(true)
    useEffect(()=>{
    setTimeout(()=>{
        cont.setAlertData((prev)=>{return {...prev,f:false}})
    },[1000])
  })
    
    return (<div className={`rounded-md px-3 py-2 text-lg text-white absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${cont.alertData.variant=="success"?"bg-green-600":"bg-red-600"}` }>{cont.alertData.msg}</div>)
  
}

export default Alert