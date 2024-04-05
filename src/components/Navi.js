import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';


export default function Navi() {
        
        const auth=localStorage.getItem("user");
        const navigate=useNavigate();
        const logout=()=>{
          console.log("apple")
          localStorage.clear();
          navigate('/SignUp')
        }
        return (
          <nav className="border-gray-400 px-2 mb-10">
            <div className="flex items-center justify-between">
              
            {auth ?<ul className="flex space-x-4 text-white font-semibold">
            
                
                
                <li className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
                  <Link to="/SignUp" onClick={logout}>Logout</Link>
                </li>
                <li className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
                  <Link to="/profile">Profile</Link>
                </li>
                </ul>
                :
                <ul className="flex space-x-4 text-white font-semibold">
                <li className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
                  <Link to="/Login">Login</Link>
                </li>
                <li className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
                  <Link to="/SignUp">Register</Link>
                </li>
                <li className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
                  <Link to="/">Home</Link>
                </li>
                </ul>
      }
            </div>
          </nav>
        );
      };
      

