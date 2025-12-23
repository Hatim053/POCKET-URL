import React, { useEffect, useRef, useState } from "react"

function Shortener({loggedInUser}) {
const [longUrl , setLongUrl] = useState('')
const [shortUrl , setShortUrl] = useState('')

const longUrlRef = useRef(null)

const handleGenerateUrl = async () => {
   try {
     if(longUrl.trim().length == 0) return
     const data = await fetch(`${import.meta.env.VITE_SERVER_SIDE_URL}/api/create` , {
         method : 'POST',
         headers : {
             "Content-Type" : "application/json"
         },
         credentials : 'include',
         body : JSON.stringify({
             url : longUrl.trim()
         })
     })
     const jsonData = await data.json()
 console.log(jsonData)
     if(jsonData.status == 201) {
        console.log(jsonData.shortUrl)
         setShortUrl(jsonData.shortUrl)
     }
   } catch (error) {
    console.log('error' , error)
   }
}


const handleCopyUrl = ()=> {
    navigator.clipboard.writeText(shortUrl)
}

useEffect(() => {
    handleGenerateUrl()
} , [longUrl])

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
  {/* Left Content */}
  <div>
    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
      Shorten URLs.
      <br />
      <span className="text-indigo-600">Track smarter.</span>
    </h1>

    <p className="mt-5 text-slate-600 max-w-lg">
      Pocket-URL helps you shorten long links, track clicks,
      and manage all your URLs from one simple dashboard.
    </p>

    {/* URL Input */}
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        ref={longUrlRef}
        placeholder="Paste your long URL here..."
        className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
      onClick={(e) => setLongUrl(longUrlRef.current.value)}>
        Shorten
      </button>
    </div>

    <p className="text-sm text-slate-500 mt-3">
    
    </p>
  </div>

  {/* Right Preview */}
  <div className="bg-white rounded-xl shadow-xl p-6">
    <p className="text-sm text-slate-500">Your shortened link</p>
    <div className="mt-3 flex items-center justify-between bg-slate-100 px-4 py-3 rounded-lg">
      <span className="text-indigo-600 font-medium">
        {shortUrl || 'generate now'}
      </span>
      <button className="text-sm text-slate-600 hover:text-slate-900" onClick={handleCopyUrl}>
        Copy
      </button>
    </div>
  </div>
</section>

    )
}

export default Shortener