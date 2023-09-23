import React, { useState } from 'react'
import './assets/styles/App.css'
import {
  Outlet,
  useLocation,
} from 'react-router-dom';
import {
  Header,
  Footer,
} from './components/common'

function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === '/' ?
          <></>
          :
          <Header />
      }
      <main>
        <Outlet />
      </main>
      {
        location.pathname === '/' ?
          <></>
          :
          <Footer />
      }
    </>
  )
}

export default App
