import React from 'react'
import { GoTelescopeFill } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { IoMegaphoneSharp } from "react-icons/io5";
function About() {
  return (
    <div className='pt-[10vh] pb-6'>
         <div className='mx-auto px-[20px] max-w-[1350px] w-full box-border mt-8'>
     <div className='grid grid-cols-1 md:grid-cols-2 '>
     <div className='flex items-center justify-center'>
        <img src="https://eliteedtech.com/wp-content/uploads/2024/01/img-768x480.png" alt="about-comapny" className='object-contain'/>
     </div>
     <div>
        <h1 className='text-[50px]  font-[500] text-[#1e2c7c] '>Company Profile</h1>
        <p className='mt-[30px] text-[18px] leading-[25px] text-justify '>EduTech+ is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts, along with interview and exam preparations for upcoming aspirants. With a strong emphasis on enhancing coding skills and knowledge, it has become a trusted destination for over 12 million plus registered users worldwide. The platform offers a vast collection of tutorials, practice problems, interview tutorials, articles, and courses, covering various domains of computer science.</p>

<p className='mt-[30px] text-[18px] leading-[25px] text-justify '>Our brand is built on the pillars of expertise, accessibility, and community. We strive to empower individuals to enhance their programming skills, to bridge the gap between academia and industry, and provide a supportive community to the learners. GeeksforGeeks is committed to promoting technological advancement and providing opportunities for growth in the ever-evolving field of computer science.</p>
     </div>
         
    </div> 

    <div className='grid grid-cols-1 sm:grid-cols-3 my-5 w-full  text-center sm:text-left'>
    <div>
    <div className='flex flex-col items-center justify-center py-4 px-2 rounded-md text-center '>
     <GoTelescopeFill  className=' py-2 text-[rgb(10,140,123)]  text-[100px] '/>
     <div className='py-2'>
        <h1 className=' text-lg font-bold'>Vision</h1>
     <p className='text-justify w-[90%]' >To be the top platform for online IT courses, offering hands-on learning with guaranteed job placements, bridging the gap between education and employment in the tech industry.</p>
     </div>
    </div>
    </div>
    <div>
    <div className='flex flex-col items-center justify-center py-4 px-2  rounded-md text-center  '>
     <TbTargetArrow className=' py-2 text-[rgb(10,140,123)]  text-[100px]'/>
     <div className='py-2'>
        <h1 className=' text-lg font-bold'>Mission</h1>
     <p className='text-justify w-[90%] '>Our mission is to provide IT skills training with guaranteed job placements, ensuring a smooth path from learning to a tech career.</p>
     </div>    
     </div>
    </div>
    <div >
    <div className='flex flex-col items-center justify-center py-4 px-2 rounded-md text-center '>
     <IoMegaphoneSharp className='py-2 text-[rgb(10,140,123)] text-[100px]'/>
     <div className='py-2'>
        <h1 className=' text-lg font-bold'>Motto</h1>
     <p className='text-justify ' >Learn. Skill Up. Get Hired</p>
     </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About