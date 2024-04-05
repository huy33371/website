import { useState } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
