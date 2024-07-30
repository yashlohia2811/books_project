import React from 'react'
import Home from './home/Home'
import{ Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Courses from './courses/Courses'
function App() {
  return (
    <>
  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Courses/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
    </>
  )
}

export default App
