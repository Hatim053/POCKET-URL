import React, { useRef } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup() {
const nameRef = useRef(null)
const emailRef = useRef(null)
const passwordRef = useRef(null)
const navigate = useNavigate()

const handleSignup = async (e) => {
    e.preventDefault()
    try {
        const data = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/user/
            signup` , {
            method : 'POST',
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                email : emailRef.current.value,
                name : nameRef.current.value,
                password : passwordRef.current.value,
            })
        })
    
        const jsonData = await data.json()
        // console.log(jsonData)
        if(jsonData.status == 201) {
        navigate('/login')
        }
    } catch (error) {
        console.log('error' , error)
    }

}

    return (
<div class="min-h-screen flex items-center justify-center bg-slate-100">
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

    <h2 class="text-2xl font-semibold text-slate-800 text-center">
      Create an Account
    </h2>
    <p class="text-sm text-slate-500 text-center mt-1">
      Start shortening your links
    </p>

    <form class="mt-6 space-y-5">

      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          ref={nameRef}
          value={nameRef.current}
          class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>


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
          placeholder="Create a password"
          class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-slate-800 transition"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </form>

    <p class="text-sm text-center text-slate-600 mt-6">
      Already have an account?
      <Link to={'/login'} class="font-medium text-slate-900 hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>

    )
}

export default Signup