import { useState } from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


const COLORS = {
  ink: "#14171c",
  bone: "#ede8dc",
  slate: "#8b9285",
  cobalt: "#3a6ea5",
  cobaltBright: "#5a8bc4",
  line: "#2a2e35",
  lineLight: "#d9d3c3",
  error: "#b5533a",
};

export default function LoginPage() {

  const navigate=useNavigate()

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const obj={}

  const handleSubmit = async(e) =>{
     e.preventDefault()
     
     obj.email=email
     obj.password=password
    try{
     const response=await axios.post("http://localhost:5000/api/v1/login",obj)
       toast.success("Login Successfully")
       console.log(response.data)
       localStorage.setItem("accountId",response.data.data._id)
      navigate("/home")
    }
    catch(error){
      toast.error(error.response?.data?.message) || "Something went wrong"
    }
  }


  return (
    
    <div className="min-h-screen w-full">
          
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen sans" style={{ background: COLORS.bone, color: COLORS.ink }}>

        {/* Left editorial panel */}
        <div
          className="hidden md:flex flex-col justify-between p-16 relative overflow-hidden"
          style={{
            background: COLORS.ink,
            color: COLORS.bone,
            backgroundImage: `repeating-linear-gradient(transparent, transparent 27px, ${COLORS.line} 27px, ${COLORS.line} 28px)`,
          }}
        >
          <div className="serif text-xl font-medium tracking-tight">
            Field<span style={{ color: COLORS.slate }}>note</span>
          </div>

          <div className="max-w-md">
            <p className="text-sm mb-4 leading-relaxed" style={{ color: COLORS.slate }}>
              Vol. 4 — Notes from the field
            </p>
            <h1 className="serif font-normal leading-tight text-4xl md:text-5xl tracking-tight">
              The best ideas rarely arrive at a desk.
            </h1>
          </div>

          <div
            className="flex justify-between text-sm pt-4 border-t"
            style={{ color: COLORS.slate, borderColor: COLORS.line }}
          >
            <span>Est. 2019</span>
            <span>Notebooks in 41 countries</span>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="serif font-medium text-3xl mb-2">Welcome back</h2>
            <p className="text-sm mb-9" style={{ color: "#555" }}>
              New to Fieldnote?{" "}
              <Link to="/createAccount">
                Create an account
              </Link>
            </p>

            <form onSubmit={(e)=>{
              handleSubmit(e)
            }}>
              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-xs font-medium mb-2" style={{ color: "#555" }}>
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
                   className="w-full bg-transparent border-0 border-b border-gray-300 py-2 text-base text-gray-900 outline-none focus:border-gray-900 placeholder:text-gray-400 transition-colors"
                />    
              </div>

              {/* Password */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-xs font-medium mb-2" style={{ color: "#555" }}>
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    id="password"
                    type="text"
                    autoComplete="current-password"
                    placeholder="Enter password"
                     className="w-full bg-transparent border-0 border-b border-gray-300 py-2 text-base text-gray-900 outline-none focus:border-gray-900 placeholder:text-gray-400 transition-colors"                    
                  />
                  
                </div>
               
                
            
              </div>

              {/* Remember / forgot */}
              <div className="flex items-center justify-between mb-8 text-sm" style={{ color: "#555" }}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    
                  />
                  Stay signed in
                </label>
                <a href="#" className="lp-link">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="lp-btn w-full py-3.5 text-sm font-medium tracking-wide"
                style={{ background: COLORS.ink, color: COLORS.bone, border: "none", cursor: "pointer" }}
              >
                Sign in
              </button>

              
                
          
            </form>

            <div className="flex items-center gap-4 my-8 text-xs" style={{ color: "#a3a3a3" }}>
              <div className="flex-1 h-px" style={{ background: COLORS.lineLight }} />
              or continue with
              <div className="flex-1 h-px" style={{ background: COLORS.lineLight }} />
            </div>

          </div>
        </div>
      </div>
    
    </div>
  );
}