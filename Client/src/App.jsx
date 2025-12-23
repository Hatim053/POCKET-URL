import { useState } from 'react'
import Navbar from './Components/NavBar.jsx'
import Shortener from './Components/Shortener.jsx'
import Features from './Components/Features.jsx'
import Footer from './Components/Footer.jsx'
import Stats from './Components/Stats.jsx'
import { useSelector } from 'react-redux'

function App() {
  const loggedInUser = useSelector(state => state.loggedInUser)
  
  return (
    <>
    <Navbar loggedInUser = {loggedInUser} />
    <Shortener loggedInUser = {loggedInUser} />
    <Features loggedInUser = {loggedInUser} />
    <Stats />
    <Footer />
    </>
  )
}

export default App
