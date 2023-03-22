import { useState } from 'react'
import Home from './views/Home'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'

function App() {
  const [active, setActive] = useState("home")

  return (
    <div className='dark:bg-slate-800 dark:text-white min-h-screen'>
      <div className="md:container md:mx-auto px-20 flex">
        <Navbar active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
