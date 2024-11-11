import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video from './pages/Video'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MenuToggleProvider from './context/menuToggle'

const App = () => {
  return (
   <MenuToggleProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
      </BrowserRouter>
   </MenuToggleProvider>
  )
}

export default App