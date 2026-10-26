import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";

const EditNotes = () => {
  const navigate=useNavigate()
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");

  const { id } = useParams();

  const getpreviousData=async()=>{
     const response = await axios.get(`http://localhost:5000/api/v2/getContent/${id}`)
     console.log(response.data)
     setHeading(response.data.heading)
     setNote(response.data.note)
  }


  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      const response=await axios.put(`http://localhost:5000/api/v2/updatenote/${id}`,{
      heading,
      note
    })
     toast.success(response?.data?.message)
     navigate(-2)
    } 
 
    catch(error){
      toast.error(error.response?.data?.message)
    }
  }

  useEffect(()=>{
     getpreviousData()
  },[])

  return (
    <main className="min-h-screen bg-[#f3f1ff] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e4ddff] text-[#6842d9] text-xs font-semibold mb-3">
            Note Editor
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#211b38]">
            Edit your note
          </h1>

          <p className="mt-2 text-[#77718a]">
            Update your thoughts, ideas, or important information.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e7e3f2] overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-[#7c3aed] to-[#6366f1]" />

          <form onSubmit={(e)=>{
            handleSubmit(e)
          }}>
             <div className="p-7 md:p-10">
            {/* Heading */}
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#49425b] mb-2">
                Note Title
              </label>

              <input
                value={heading}
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
                type="text"
                placeholder="Give your note a title..."
                className="w-full px-4 py-3 bg-[#f8f7fc] border border-[#e4e0ed] rounded-xl text-xl font-semibold text-[#29233d] placeholder:text-[#aaa4b8] outline-none focus:border-[#8064dc] focus:ring-2 focus:ring-[#8064dc]/10"
              />
            </div>

            {/* Note */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#49425b] mb-2">
                Your Note
              </label>

              <textarea
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                placeholder="Start writing your thoughts..."
                className="w-full min-h-[380px] px-4 py-4 bg-[#f8f7fc] border border-[#e4e0ed] rounded-xl resize-none text-lg leading-8 text-[#393247] placeholder:text-[#aaa4b8] outline-none focus:border-[#8064dc] focus:ring-2 focus:ring-[#8064dc]/10"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-5 border-t border-[#ece9f2]">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white font-medium text-sm hover:-translate-y-0.5 transition cursor-pointer shadow-md"
              >
                Update Note
              </button>
            </div>

          
          </div>
            </form> 
           <button
            onClick={()=>{
              navigate(-1)
            }}
              type="button"
              className="px-5 py-2.5 rounded-lg bg-[#f0eef5] text-[#686174] font-medium text-sm hover:bg-[#e5e2eb] transition cursor-pointer"
            >
              Cancel
            </button>
        </div>
      </div>
    </main>
  );
};

export default EditNotes;
