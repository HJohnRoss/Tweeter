import { useState } from 'react'
import Home from './views/Home'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <div className="md:container md:mx-auto px-20">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
