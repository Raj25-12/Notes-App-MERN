import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyNotes = () => {
  const navigate = useNavigate();

  const accountId=localStorage.getItem("accountId")
  // console.log(accountId,"Hye")

  const [heading, setHeading] = useState([]);
  const [paint,setpaint] = useState([]);

  const handleGetContent = async () => {
    try {
      const response = await axios.get(
        `https://notes-app-mern-backend-hyxg.onrender.com/api/v2/getheading/${accountId}`,
      );
      setHeading(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPaint = async () =>{
        const response = await axios.get(`https://notes-app-mern-backend-hyxg.onrender.com/api/v3/getpaint/${accountId}`)
        setpaint(response.data)    
  }

  const handleDelete = async (item)=>{

      const confirmDelete = window.confirm("Are you sure you want to delete this note?"); 
      if (!confirmDelete) { 
        return; 
      }
      const response = await axios.delete(`https://notes-app-mern-backend-hyxg.onrender.com/api/v2/deleteNote/${item}`)
      toast.error("Note Deleted")
      setHeading((prev)=>
        prev.filter((note) => note._id !== item )
      )
  }

  const handleDelete2 = async (item2)=>{
    const response = await axios.delete(`https://notes-app-mern-backend-hyxg.onrender.com/api/v3/deletepaint/${item2}`)
    toast.error("Note Deleted")
    setpaint((prev)=>
       prev.filter((note)=> note._id !== item2)
    )
  }

  useEffect(() => {
    handleGetContent();
    handleGetPaint();
  }, []);

  return (
    <div className="min-h-screen bg-[#eee9dd] p-6 md:p-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#20252b] mb-2">
          My Notes
        </h1>

        {/* Notes List */}
        <div className="bg-[#20252b] rounded-2xl p-4 md:p-6 shadow-lg">
          {heading.length === 0 ? (
            <div className="text-center py-12 text-[#737b86]">
              No notes found
            </div>
          ) : (
            <div className="space-y-3">
              {heading.map((item,key) => (
                <div className="flex " key={item._id}>
                <button
                  onClick={()=>{
                    navigate(`/saved/${item._id}`)
                  }}
                  key={item._id} 
                  className="
                                        w-full
                                        text-left
                                        px-5
                                        py-4
                                        rounded-xl
                                        bg-[#292f36]
                                        text-[#ede8dc]
                                        border
                                        border-[#343a42]
                                        hover:bg-[#343a42]
                                        hover:border-[#555d67]
                                        hover:translate-x-1
                                        transition-all
                                        duration-200
                                        cursor-pointer
                                        flex
                                        items-center
                                        justify-between
                                        group
                                    "
                >
                  <span className="text-lg font-medium truncate">
                    {item.heading}
                  </span>
                  {/* <span>{key}</span> */}

                  <span
                    className="
                                        text-[#737b86]
                                        group-hover:text-[#ede8dc]
                                        transition-colors
                                    "
                  >
                    →
                  </span>
                  
                </button>
               <button
                   onClick={()=>{
                    handleDelete(item._id)
                   }}
                   className="
                   bg-red-400
    hover:bg-red-600
    text-white
    cursor-pointer
    p-5
    ml-4
    rounded-3xl
    transition-all
    duration-200
    hover:scale-105
  "
>
  Delete
</button>
                </div>
              ))}
            </div>
          )}
        </div>
   <div>
  {paint.map((item2) => {
    return (
       <div className="bg-black rounded-2xl mt-6 p-4 flex gap-4">
      <img
        src={item2.canvasdata}
        alt="Drawing"
        className="w-full max-w-sm mx-auto rounded-lg border border-[#2a2e35]"
      />
       <button    
       onClick={()=>{
        handleDelete2(item2._id)
       }}
        className="
    bg-red-400
    hover:bg-red-600
    text-white
    cursor-pointer
    p-5
    ml-4
    rounded-3xl
    transition-all
    duration-200
    hover:scale-105
  ">Delete</button>
  </div>
    );
  })}
 
</div>
        <button
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
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MyNotes;
