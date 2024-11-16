import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video from './pages/Video'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MenuToggleProvider from './context/menuToggle'
import ContextApiProvider from './context/ContextApi'
import SearchVideo from './components/SearchVideo'

const App = () => {
  return (
  <ContextApiProvider>
     <MenuToggleProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<SearchVideo />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
        </BrowserRouter>
     </MenuToggleProvider>
  </ContextApiProvider>
  )
}

export default App