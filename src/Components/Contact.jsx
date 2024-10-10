import React from 'react'

function Contact() {
  function handleSubmit(e)
  {
   e.preventDefault()
      console.log(e.target.elements.mobile.value)
   console.dir(e.target.elements.mobile)
   //e.elements.reset()
   if(e.target.elements.mobile.value.length<10 || e.target.elements.mobile.value.length>14  )
   {
    alert("please enter correct phone number")
    return;
   }
   else {
    alert("Your data is submitted we will contact you soon")

   e.target.reset()
   }
}
    return (
    <div className='pt-[10vh] pb-8 '>
       <div className='mx-auto px-[20px] max-w-[1350px] w-full box-border'>
            
          <form className='my-10 grid grid-cols-1 sm:grid-cols-2   w-full sm:rounded-[30px]  sm:shadow-[0_0_50px_1px_gray]' onSubmit={handleSubmit}>
            <div className='bg-[#313131]  sm:rounded-l-[30px]  sm:shadow-2xl flex justify-center items-center'>
          <div className='w-full text-center sm:text-left py-5 sm:p-[20px] md:p-[40px] box-border'>
            <h1 className='text-[50px] leading-[55px] font-[500] text-[#669fff]'>Have Us<p className='text-[50px]leading-[55px] font-[700] text-white '>Call You !</p></h1>
            <p className='mt-[30px] text-[18px] leading-[25px] text-white'>Get in touch with our team and get your queries resolved.</p>
            </div> 
            </div>

           <div className='bg-white  sm:rounded-r-[30px]  sm:border-[1px] border-black '>
            <div className='w-full flex flex-col p-[40px] gap-8 justify-center items-center  '>
             <input type="text" placeholder='Name *' name="name" required  className='h-[50px] border-b-[1px] border-b-black w-[80%] focus-visible:outline-none focus:outline-none text-xl'/>
             <input type="email" placeholder='Email *' name="email" className='h-[50px] border-b-[1px] border-b-black w-[80%] focus-visible:outline-none focus:outline-none text-xl' required/>
             <input type="text" placeholder='Mobile *' name="mobile" required className='h-[50px] border-b-[1px] border-b-black w-[80%] focus-visible:outline-none focus:outline-none text-xl '/>
             <input type="submit" value="Request A Callback" className=' px-8 py-3  rounded-lg text-white text-bold bg-gray-950 hover:brightness-75 hover:transition-all duration-500 '/>
            </div>
           </div>

          </form>

       </div>
    </div>
  )
}

export default Contact