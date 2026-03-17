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
          <a href="#home" className="nav-link" onClick={handleClick}>Inicio</a>
          <a href="#proyectos" className="nav-link" onClick={handleClick}>Proyectos</a>
          <a href="#skills" className="nav-link" onClick={handleClick}>Habilidades</a>
          <a href="#about" className="nav-link" onClick={handleClick}>Sobre Mí</a>

          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            <span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
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
