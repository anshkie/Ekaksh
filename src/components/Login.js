import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem("auth");
        if(auth)
        {
          navigate("/")
        }
      })
    return(
        <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-500 p-8 rounded-lg shadow-md w-96">
          <h1 className="text-4xl font-serif my-2 text-white">LOGIN</h1>
          <form className="my-6">
            <div className="mb-4">
              <label className="text-white block mb-1">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                placeholder="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white block mb-1">Password:</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-md py-2.5"
            >
              Log In
            </button>
          </form>
          {/* Displaying email for testing purposes */}
         
        </div>
      </div>
      )
  
}
