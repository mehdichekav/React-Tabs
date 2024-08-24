import { useState } from 'react'
import viteLogo from '/vite.svg'
import Tab from './Tab.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Tab />
   </div>
  )
}

export default App
