import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Admin from './Pages/Admin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Admin/>
    </>
  )
}

export default App
