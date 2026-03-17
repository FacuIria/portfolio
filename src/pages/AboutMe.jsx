import '../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="container">
        <h2>Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Mi Historia</h3>
            <p>
              Mi nombre es Facundo Iriarte. Actualmente estoy cursando Ingeniería Informática en UADE, 
              transitando mi tercer año de carrera.
            </p>
            
            <p>
              Soy un desarrollador full stack apasionado por crear soluciones web innovadoras y funcionales.
              Me encanta resolver problemas complejos a través del código y tengo un compromiso continuo 
              con el aprendizaje de nuevas tecnologías.
            </p>
            
            <h3>Mi Enfoque</h3>
            <p>
              Soy una persona que disfruta liderando equipos y siendo leal con mis compañeros. 
              Mi objetivo es progresar y crecer como desarrollador, combinando mis conocimientos académicos 
              con habilidades prácticas para crear código limpio, mantenible y escalable.
            </p>
            
            <div className="about-cta">
              <p><strong>¿Quieres trabajar juntos?</strong></p>
              <div className="cta-buttons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Conectar en LinkedIn
                </a>
                <a href="mailto:tu-email@ejemplo.com" className="btn btn-secondary">
                  Envíame un Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
