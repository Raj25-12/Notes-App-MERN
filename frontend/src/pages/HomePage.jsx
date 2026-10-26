import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import PaintArea from '../components/PaintArea'


const HomePage = () => {
  const[ischange,setIsChange]= useState(true)

  const handleChange = ()=>{
    if(ischange === true){
    setIsChange(false)
      console.log(ischange)
    }
    else{
      setIsChange(true)
        console.log(ischange)
    }
  }

  console.log(ischange)
  return (
    <div  className="min-h-screen bg-[#ede8dc]">
      <Navbar/>
      <div  className="flex justify-end">
        <p className="text-sm md:text-base text-[#6b7280] font-medium mb-3 mt-3 px-6">If you want to change theme</p>
       <button 
         className=" px-6 py-2.5 rounded-lg bg-[#14171c] text-[#ede8dc] font-medium shadow-md hover:bg-[#2a2e35] hover:shadow-lg transition-all duration-200"
         onClick={()=>{handleChange()}}
         >Change
       </button>
        </div>
        {ischange?<Content/>:<PaintArea/>}
    </div>
  )
}

export default HomePage
