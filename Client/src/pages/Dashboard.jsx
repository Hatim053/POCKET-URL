import React, { useEffect, useRef, useState } from "react"
import useFetch from "../CustomHooks/useFetch.js"
import DashboardSkeleton from "../SkeletonUi/DashboardSkeleton.jsx"
import { useNavigate } from "react-router-dom"

function Dashboard() {
 const[data , setData] = useState(null)
 const navigate = useNavigate()
   const {response , error} = useFetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/api/analytics`)
   useEffect(() => {
    if(response) {
setData(response.urls)
    }
    
   } , [response])


   const handleDelete =  (url,id) => {
   return async () => {
   const res = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/api/delete/${url}` , {
    method : 'POST',
    headers : {
      "Content-Type" : "application/json",
    },
    credentials : 'include',
   })
   const jsonRes = await res.json()
  console.log(jsonRes)
  const newData = data.filter((url) => url._id != id)
  setData(newData)
   }
   }

    return (
        <>
        {!data ? <DashboardSkeleton/> : <section className="max-w-7xl mx-auto px-6 py-10">
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">
        Dashboard
      </h1>
      <p className="text-slate-600 text-sm mt-1">
        Manage and track your shortened URLs
      </p>
    </div>

    <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
    onClick={() =>navigate('/')}>
      + Create New
    </button>
  </div>

  {/* Table */}
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-slate-100 text-slate-700">
        <tr>
          <th className="text-left px-6 py-4 font-medium">Original URL</th>
          <th className="text-left px-6 py-4 font-medium">Short URL</th>
          <th className="text-center px-6 py-4 font-medium">Clicks</th>
          <th className="text-right px-6 py-4 font-medium">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y">
        {/* Row */}
        {
            
            data.map((url,idx) => (
                <tr key={url._id} className="hover:bg-slate-50 transition">
          <td className="px-6 py-4 max-w-xs truncate text-slate-700">
            {url.redirectUrl}
          </td>

          <td className="px-6 py-4">
            <span className="text-indigo-600 font-medium">
            {url.shortUrl}
            </span>
            
           
          </td>

          <td className="px-6 py-4 text-center font-medium">
            {url.clicks.length}
          </td>

          <td className="px-6 py-4 text-right space-x-3">
            <button className="text-slate-600 hover:text-indigo-600 transition cursor-pointer"
            onClick={(e) => {navigator.clipboard.writeText(url.shortUrl)}}>
              Copy
            </button>
            <button className="text-red-500 hover:text-red-600 transition cursor-pointer" onClick={handleDelete(url.shortUrl.substring(26),url._id)}>
              Delete
            </button>
          </td>
        </tr>
            ))
        }

    
        {!data ? <tr>
          <td colSpan="4" className="px-6 py-10 text-center text-slate-500">
            No URLs created yet
          </td> 
        </tr> : ''}
      </tbody>
    </table>
  </div>
</section> }
        </>


    )
}


export default Dashboard