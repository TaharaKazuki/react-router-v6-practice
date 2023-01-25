import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

import { CustomLink } from './hooks/customLink'

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
