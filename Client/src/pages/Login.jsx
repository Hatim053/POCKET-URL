import React, { useRef } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addUser } from '../slice/userSlice.js'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const hanldeLogin = async (e) => {
    e.preventDefault()
 try {
       const data = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/user/login` , {
           method : 'POST',
           credentials : 'include',
           headers : {
               "Content-Type" : "application/json"
           },
           body : JSON.stringify({
               email : emailRef.current.value,
               password : passwordRef.current.value,
           })
       })
       const jsonData = await data.json()
       if(jsonData.status == 405) {
           navigate('/signup') // no such user exists
       } 
       if(jsonData.status == 200) {
        dispatch(addUser(jsonData.user))
           navigate('/') // redirect to home page after successfuly login
       }
 } catch (error) {
    console.log('error' , error)
 }
  }

    return (
        <div class="min-h-screen flex items-center justify-center bg-slate-100">
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    
    <h2 class="text-2xl font-semibold text-slate-800 text-center">
      Welcome Back
    </h2>
    <p class="text-sm text-slate-500 text-center mt-1">
      Login to manage your short links
    </p>

    <form class="mt-6 space-y-5">
   
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          type="email"
          ref={emailRef}
          value={emailRef.current}
          placeholder="you@example.com"
          class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>

    
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          type="password"
          ref={passwordRef}
          value={passwordRef.current}
          placeholder="••••••••"
          class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>

 
      <button
        type="submit"
        class="w-full bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-slate-800 transition"
        onClick={hanldeLogin}
      >
        Login
      </button>
    </form>

    <p class="text-sm text-center text-slate-600 mt-6">
      Don’t have an account?
      <Link to={'/signup'} class="font-medium text-slate-900 hover:underline">
        Sign up
      </Link>
    </p>
  </div>
</div>

    )
}

export default Login