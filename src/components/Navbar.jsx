import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleClick}>
          <i className="fas fa-code"></i> Facundo Iriarte
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleClick}>Home</a>
          <a href="#projects" className="nav-link" onClick={handleClick}>Projects</a>
          <a href="#skills" className="nav-link" onClick={handleClick}>Skills</a>
          <a href="#about" className="nav-link" onClick={handleClick}>About</a>

          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch theme">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
