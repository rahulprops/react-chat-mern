import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import axios from 'axios'
import { useAuth } from "../Context/AuthContext";
import Cookies from 'js-cookie'
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [image, setImage] = useState(null);
  const [login,setLogin]=useState({
    username:'',
    password:''
  })
  const {setAuthUser}=useAuth();
  // console.log(login)
  // console.log(setAuthUser)
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  // const handleLogin=(event)=>{
     
  // }
   const sendLoging= async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:7878/api/user/login", {
        username: login.username,
        userpassword: login.password,
      }, {
        withCredentials: true, // Allows sending and receiving cookies
      });
      // alert("login")
      // console.log(response.data)
      if(response.data.success===true){
        alert(response.data.message)
        // setAuthUser(response.data)
        const tokens=Cookies.get("token")
        // console.log("login token"+ tokens)
        setAuthUser(tokens)
      }
    }catch(error){
      alert(`Login failed: ${error.response?.data?.message || error.message}`);
    }
    //  alert("login")
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Signup"}
        </h2>
        {isLogin ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">username</label>
              <input
                type="text"
                value={login.username}
                onChange={(event)=>setLogin({ ...login,username:event.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={login.password}
                onChange={(event)=>setLogin({ ...login, password:event.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button onClick={sendLoging} className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200">
              Login
            </button>
          </>
        ) : (
          <>
            <div className="mb-4 ">
              <label id="upload" className="block text-gray-700 mb-1">
            
             
              <div className=" flex justify-center">
              <div className="relative w-20 h-20 bg-slate-100 rounded-full flex justify-center items-center overflow-hidden cursor-pointer ">
                {image ? (
                  <img
                    src={image}
                    alt="Profile Preview"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FaCamera
                    onClick={handleIconClick}
                    className="text-gray-500 text-3xl"
                  />
                )}
              </div>
              </div>
              </label>
              <input
                type="file"
                accept="image/*"
                id="upload"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              <div className=" flex justify-center">
              <button
                onClick={handleIconClick}
                className="mt-2  text-blue-500 hover:underline"
              >
                {image ? "Change Picture" : "Upload Picture"}
              </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-200">
              Signup
            </button>
          </>
        )}
        <div className="mt-4 text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
