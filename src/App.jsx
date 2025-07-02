import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterLayout from './components/RouterLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterLayout />
    </>
  )
}

export default App
