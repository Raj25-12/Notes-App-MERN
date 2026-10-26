import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


const CreateAccountPage = () => {

  const navigate=useNavigate() 

  const [fullname,setFullName]=useState('')
  const [username,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const obj={}

  const submit=async(e)=>{
     e.preventDefault()

     obj.fullname=fullname
     obj.username=username
     obj.email=email
     obj.password=password

     try{
     const response = await axios.post("https://notes-app-mern-backend-hyxg.onrender.com/api/v1/create",obj)
     toast.success(response.data.message)
      localStorage.setItem("accountId",response.data.data._id)
     navigate('/home')

     }
     catch(error)
     {
        toast.error(error.response?.data?.message) || "Something went wrong"
     }
     
  }



  return (
    <div className="min-h-screen w-full">
      <div
        className="grid grid-cols-1 md:grid-cols-2 min-h-screen sans"
        style={{ background: "#ede8dc", color: "#14171c" }}
      >
            
        {/* Left editorial panel */}
        <div
          className="hidden md:flex flex-col justify-between p-16 relative overflow-hidden"
          style={{
            background: "#14171c",
            color: "#ede8dc",
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 27px, #2a2e35 27px, #2a2e35 28px)",
          }}
        >
          <div className="serif text-xl font-medium tracking-tight">
            Field<span style={{ color: "#8b9285" }}>note</span>
          </div>
          <div className="max-w-md">
            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "#8b9285" }}
            >
              Vol. 4 — Notes from the field{" "}
            </p>
            <h1 className="serif font-normal leading-tight text-4xl md:text-5xl tracking-tight">
              Start a notebook. See where it leads.
            </h1>
          </div>
          <div
            className="flex justify-between text-sm pt-4 border-t"
            style={{ color: "#8b9285", borderColor: "#2a2e35" }}
          >
            <span>Est. 2019</span> <span>Notebooks in 41 countries</span>
          </div>
        </div>
        {/* Right form panel */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="serif font-medium text-3xl mb-2">
              Create your account
            </h2>
            <p className="text-sm mb-9" style={{ color: "#555" }}>
              Already have one?
              <Link to="/">
                Sign in
               </Link>
            </p>
            {/* Form */}
            <form
            onSubmit={submit}
            >
              {/* Full name */}
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium mb-2"
                  style={{ color: "#555" }}
                >
                  Full name
                </label>
                <input
                  value={fullname}
                  onChange={(e)=>{
                    setFullName(e.target.value)
                  }}
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter Fullname"
                  className="w-full bg-transparent border-0 border-b border-[#d9d3c3] py-2 text-base text-[#14171c] outline-none transition-colors placeholder:text-[#999] focus:border-[#3a6ea5]"
                />
              </div>
              {/* Username */}
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-xs font-medium mb-2"
                  style={{ color: "#555" }}
                >
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e)=>{
                    setUserName(e.target.value)
                  }}
                  id="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter username"
                  className="w-full bg-transparent border-0 border-b border-[#d9d3c3] py-2 text-base text-[#14171c] outline-none transition-colors placeholder:text-[#999] focus:border-[#3a6ea5]"
                />
              </div>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium mb-2"
                  style={{ color: "#555" }}
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-0 border-b border-[#d9d3c3] py-2 text-base text-[#14171c] outline-none transition-colors placeholder:text-[#999] focus:border-[#3a6ea5]"
                />
              </div>
              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium mb-2"
                  style={{ color: "#555" }}
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter Password"
                  className="w-full bg-transparent border-0 border-b border-[#d9d3c3] py-2 text-base text-[#14171c] outline-none transition-colors placeholder:text-[#999] focus:border-[#3a6ea5]"
                />
              </div>
              {/* Terms */}
              <p
                className="text-xs mb-7 leading-relaxed"
                style={{ color: "#999" }}
              >
                By creating an account, you agree to Fieldnote's{" "}
                <a href="#" className="text-[#3a6ea5] hover:underline">
                  Terms
                </a>
                and
                <a href="#" className="text-[#3a6ea5] hover:underline">
                  Privacy Policy
                </a>
              </p>
              {/* Create account button */}
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-medium tracking-wide bg-[#14171c] text-[#ede8dc] transition-colors hover:bg-[#2a2e35]"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
