import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/App.css'

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'es')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
      </Routes>
    </Router>
  )
}

export default App
