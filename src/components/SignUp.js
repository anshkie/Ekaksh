import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login';

export default function SignUp() {
    const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate()
  useEffect(()=>{
    const auth=localStorage.getItem("auth");
    if(auth)
    {
      navigate("/")
    }
  })
  
  return (
    
    <div className="flex items-center justify-center ">
        <form className='bg-blue-500 p-8 shadow-md rounded-lg flex flex-col '>
            <h1 className='text-3xl font-bold font-serif mb-5'>Register</h1>
            <div className='mx-2 mb-5'>
            <label className='mx-5'>Name:</label>
            <input type="text" placeholder='Enter Name' className="border border-gray-300 px-3 py-2 rounded-md" value={name} onChange={(e)=>setname(e.target.value)} />
            </div>
            <div className='mb-5'>
            <label className='mx-6'>Email:</label>
            <input type="email" placeholder='Enter Email'className="border border-gray-300 px-3 py-2 rounded-md" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className='mb-5'>
            <label className='mx-2'>PassWord:</label>
            <input type="text" placeholder='Enter PassWord' className="border border-gray-300 px-3 py-2 rounded-md" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button  type="button" className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Sign In</button>
            
        </form>
    </div>
  )

}
