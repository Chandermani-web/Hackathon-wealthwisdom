import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className='webpage-container'>
      <Header />
      <div className='mid-container-webpage'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
