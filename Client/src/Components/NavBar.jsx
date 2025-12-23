import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Navbar = ({loggedInUser}) => {
const navigate = useNavigate()
const handleLogout = async () => {
 try {
       const data = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/user/logout` , {
           method : 'POST',
           headers : {
               "Content-Type" : "application/json"
           },
           credentials : 'include',
       })
       const jsonData = await data.json()
       if(jsonData.status == 200) {
           navigate('/login')
       }
 } catch (error) {
    console.log('error' , error)
 }
}
const handleDashboard = () => {
  if(! loggedInUser) navigate('/login')
  else navigate('/dashboard')
}
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Pocket<span className="text-indigo-600">URL</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link
            onClick={handleDashboard}
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
          >
            Dashboard
          </Link>

          {! loggedInUser ? <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Login
          </Link>
          :
          <Link
            
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
            onClick={handleLogout}
          >
            Logout
          </Link> }
        </nav>
      </div>
    </header>
  );
};

export default Navbar
