import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Main />
    </div>
  )
}

export default App
