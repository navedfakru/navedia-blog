import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

function Login() {
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const google2Auth = async () => {
    setError("")
    try {
      const session = await authService.googleAuth()
      if (session) {
        const userData = await authService.getCurrentUser()
        console.log(userData)
        if (userData) dispatch(login(userData));
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex w-full min-h-screen items-center justify-center background-gradient'>
      <button
        type="button"
        className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600  gap-2"
        onClick={google2Auth}
      >
        <FcGoogle size={25} />
        Login With Google
      </button>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    </div>
  )
}

export default Login