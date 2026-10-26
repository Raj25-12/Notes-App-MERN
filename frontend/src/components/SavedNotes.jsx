import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const SavedNotes = () => {
    const navigate=useNavigate()
    const [data,setData]=useState(null)
    const {id}=useParams()
    
  
    const getData=async()=>{
       const response=await axios.get(`http://localhost:5000/api/v2/getcontent/${id}`)
       setData(response.data)
    }
    
    useEffect(()=>{
              console.log(data)
    },[data])

   useEffect(()=>{
     getData()
   },[id])
    
  return (
    <div className="fixed inset-0 z-50">

      {/* Background blur */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
          backdrop-blur-md
        "
      />

      {/* Saved Notes Page */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[85%]
          h-[85%]
          bg-[#20252b]
          rounded-2xl
          shadow-2xl
          overflow-y-auto
          p-8
          md:p-12
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="
            text-3xl
            md:text-4xl
            font-semibold
            text-[#ede8dc]
          ">
            {data?.heading}
          </h1>

          <button
          onClick={()=>{
            navigate(-1)
          }}
            className="
              text-[#a9adb3]
              text-3xl
              hover:text-white
              cursor-pointer
              transition-colors
            "
          >
            ×
          </button>

        </div>

        {/* Content */}
        <div className="text-[#a9adb3]">
          {data?.note}
        </div>
            <div className="flex justify-end mt-8">
  <button
  onClick={()=>{
       navigate(`/edit/${id}`)
  }}
    className="
      px-6
      py-2.5
      bg-[#ede8dc]
      text-[#1f2329]
      rounded-lg
      font-medium
      text-sm
      hover:bg-[#d8d2c5]
      hover:scale-105
      transition-all
      duration-200
      cursor-pointer
    "
  >
    Edit
  </button>
</div>
      </div>
 
    </div>
    
  );
};

export default SavedNotes;