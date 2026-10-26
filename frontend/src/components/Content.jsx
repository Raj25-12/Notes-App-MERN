import React, { useState } from "react";
import axios from "axios"; 
import { toast } from "react-toastify";

const Content = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const accountId=localStorage.getItem("accountId")

  const obj={}

  const handleSubmit = async(e) =>{
          e.preventDefault()
          obj.heading=heading
          obj.note=note
          obj.accountId=accountId

       try{
           const response=await axios.post("http://localhost:5000/api/v2/create",obj)
          toast.success(response.data.message) 
       }
       catch(error){
        toast.error(error.response?.data?.message)|| "Something went wrong"
       }
         // console.log(response)   
      
          setHeading("")
          setNote("")

  }

  return (
    <main className="bg-[#ede8dc] px-6 pb-10">

      <div className="max-w-5xl mx-auto">
         <h1 className="text-2xl md:text-2xl font-semibold text-cyan-950 mb-4 border-b border-[#3a3f47] pb-2">
         Text Area
         </h1>
         
        <div
          className="min-h-[650px] p-8 md:p-12 shadow-xl"
          style={{
            background: "#14171c",
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 36px, #2a2e35 36px, #2a2e35 37px)",
          }}
        >

          {/* Heading */}
          <form onSubmit={(e)=>{
            handleSubmit(e)
          }}>
           <div className="flex justify-end">
  <button
    type="submit"
    className="
      px-6
      py-2.5
      bg-[#ede8dc]
      text-[#1f2329]
      rounded-lg
      font-medium
      text-sm
      hover:bg-[#d8d2c5]
      transition-colors
      duration-200
      cursor-pointer
    "
  >
    Save
  </button>
</div>
<input
  type="text"
  value={heading}
  onChange={(e) => setHeading(e.target.value)}
  placeholder="Enter heading"
  className="
    w-full
    bg-transparent
    border-0
    border-b
    border-[#3a3f47]
    pb-4
    mb-8
    text-3xl
    md:text-4xl
    leading-[1.3]
    font-medium
    text-[#ede8dc]
    placeholder:text-[#555b63]
    outline-none
  "
/>

          {/* Note */}
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Start writing..."
            className="
              w-full
              min-h-[480px]
              bg-transparent
              border-0
              resize-none
              text-lg
              leading-[37px]
              text-[#ede8dc]
              placeholder:text-[#555b63]
              outline-none
            "
          />
        
          </form>
        </div>

      </div>

    </main>
  );
};

export default Content;