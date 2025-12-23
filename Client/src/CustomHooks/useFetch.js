import { useState , useEffect } from "react"

function useFetch(url) {
const [response , setResponse] = useState(null)
const [error , setError] = useState(null)
// console.log(url)
async function getData(url) {
   try {
     if(url.trim().length == 0) return
     const data = await fetch(url , {
         method : 'GET',
         headers : {
             "Content-Type" : "application/json"
         },
         credentials : 'include',
     })
     const jsonData = await data.json()
    //  console.log(jsonData)
     setResponse(jsonData)
     
   } catch (error) {
    setError(error)
   }
} 

useEffect(() => {
    getData(url)
} , [url])

    return {response , error}
}

export default useFetch