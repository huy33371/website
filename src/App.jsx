import { useState } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
