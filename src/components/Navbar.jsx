import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar({ theme, toggleTheme, language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleClick = () => {
    setIsOpen(false)
  }

  const sections = ['projects', 'skills', 'experience', 'about', 'contact']
  const labels = language === 'es'
    ? ['Proyectos', 'Tecnologías', 'Experiencia', 'Sobre mí', 'Contacto']
    : ['Projects', 'Skills', 'Experience', 'About', 'Contact']

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleClick}>
          <i className="fas fa-code"></i> Facundo Iriarte
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {sections.map((section, index) => (
            <a key={section} href={`#${section}`} className="nav-link" onClick={handleClick}>{labels[index]}</a>
          ))}

          <div className="language-switch" aria-label={language === 'es' ? 'Cambiar idioma' : 'Change language'}>
            <button type="button" className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
          </div>

          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={language === 'es' ? 'Cambiar tema' : 'Switch theme'}>
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            <span>{theme === 'dark' ? (language === 'es' ? 'Claro' : 'Light') : (language === 'es' ? 'Oscuro' : 'Dark')}</span>
          </button>
        </div>

        <button type="button" className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={language === 'es' ? 'Abrir menú' : 'Open menu'} aria-expanded={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
