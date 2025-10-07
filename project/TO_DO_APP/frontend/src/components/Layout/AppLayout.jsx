import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const AppLayout = () => {
  return (
      <div>
          <Navbar />
          <main className='min-h-screen'>
              <Outlet/>
          </main>
          <Footer/>
      </div>
  )
}

export default AppLayout