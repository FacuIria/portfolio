import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home() {
  const heroPhoto = '/images/facundo-playa.jpg'
  const aboutPhoto = '/images/facundo-traje.jpg'

  const proyectos = [
    {
      id: 1,
      titulo: 'Felsani Motors',
      descripcion:
        'Marketplace de vehículos desarrollado como aplicación web full-stack utilizando Java, Spring Boot y MySQL. Permite filtrar vehículos, ver detalles y gestionar un carrito de compras con panel administrativo.',
      tecnologias: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate'],
      tipo: 'FULL STACK',
      imagen: '🚗',
      repositorio: 'https://github.com/FacuIria',
    },
    {
      id: 2,
      titulo: 'DryMat',
      descripcion:
        'Aplicación web de comercio electrónico desarrollada con React y Vite. Interfaz moderna y responsiva con gestión de productos y carrito de compras optimizado para todos los dispositivos.',
      tecnologias: ['React', 'Vite', 'JavaScript', 'CSS3'],
      tipo: 'FRONTEND',
      imagen: '🛒',
      repositorio: 'https://github.com/FacuIria',
    },
  ]

  const skills = [
    {
      categoria: 'Lenguajes de Programación',
      items: [
        { nombre: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        {
          nombre: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        { nombre: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'SQL', logo: 'https://cdn.simpleicons.org/sqlite/003B57' },
      ],
    },
    {
      categoria: 'Frameworks & Librerías',
      items: [
        { nombre: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { nombre: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      categoria: 'Bases de Datos',
      items: [
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        {
          nombre: 'Microsoft SQL Server',
          logo: 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927',
        },
        {
          nombre: 'JPA/Hibernate',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg',
        },
      ],
    },
    {
      categoria: 'Herramientas & Control de Versiones',
      items: [
        { nombre: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { nombre: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF' },
        { nombre: 'REST APIs', logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
        { nombre: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
        { nombre: 'Insomnia', logo: 'https://cdn.simpleicons.org/insomnia/5849BE' },
        { nombre: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      ],
    },
  ]

  const revealUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  return (
    <main className="portfolio">
      <section id="home" className="hero-section">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <motion.div className="hero-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <motion.div className="hero-text" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="hero-greeting">Hola, bienvenido a mi portafolio</p>
            <h1 className="hero-title">
              Soy <span>Facundo Iriarte</span>
            </h1>
            <p className="hero-subtitle">Desarrollador Full Stack</p>
            <p className="hero-description">
              Estudiante de Ingeniería Informática en UADE con foco en construir productos sólidos,
              escalables y bien diseñados. Me gusta combinar lógica de negocio, buena experiencia de
              usuario y trabajo colaborativo para resolver problemas reales.
            </p>

            <div className="hero-highlights">
              <div className="highlight-pill">
                <span>Java + Spring Boot</span>
              </div>
              <div className="highlight-pill">
                <span>React + Vite</span>
              </div>
              <div className="highlight-pill">
                <span>MySQL + APIs REST</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#proyectos" className="btn btn-primary">
                Ver Mi Trabajo
              </a>
              <a href="#about" className="btn btn-secondary">
                Más sobre mí
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/facundo-iriarte-54259b183"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-link-badge linkedin"
              >
                <i className="fab fa-linkedin-in social-link-icon" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/FacuIria"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-link-badge github"
              >
                <i className="fab fa-github social-link-icon" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
              <a href="mailto:facuiria03@gmail.com" title="Email" className="social-link-badge email">
                <i className="fas fa-envelope social-link-icon" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-image" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-photo-frame">
              <img src={heroPhoto} alt="Facundo Iriarte con traje" className="hero-photo" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-metrics" {...revealUp}>
          <div className="metric-card">
            <strong>2+</strong>
            <span>Proyectos destacados</span>
          </div>
          <div className="metric-card">
            <strong>2022 - Actualidad</strong>
            <span>Ingeniería Informática (UADE)</span>
          </div>
          <div className="metric-card">
            <strong>Full Stack</strong>
            <span>Java · React · SQL</span>
          </div>
        </motion.div>
      </section>

      <section id="proyectos" className="proyectos-section">
        <div className="container">
          <motion.h2 {...revealUp}>Proyectos</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            Algunos de mis proyectos desarrollados
          </motion.p>

          <div className="proyectos-grid">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.id}
                className="proyecto-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <div className="proyecto-tipo">{proyecto.tipo}</div>
                <div className="proyecto-imagen">{proyecto.imagen}</div>

                <div className="proyecto-content">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>

                  <div className="proyecto-tech">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className="btn-repositorio">
                    <i className="fab fa-github"></i> Ver proyecto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <motion.h2 {...revealUp}>Habilidades</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            Tecnologías y herramientas que utilizo
          </motion.p>

          <div className="skills-badges-container">
            {skills.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              >
                <h3 className="category-title">{category.categoria}</h3>
                <div className="skills-badges">
                  {category.items.map((skill, index) => (
                    <div key={index} className="skill-badge">
                      <img src={skill.logo} alt={`Logo de ${skill.nombre}`} className="skill-logo" loading="lazy" />
                      <span>{skill.nombre}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <motion.h2 {...revealUp}>Sobre Mí</motion.h2>

          <div className="about-content">
            <motion.div className="about-image" {...revealUp}>
              <div className="about-photo-card">
                <img src={aboutPhoto} alt="Facundo Iriarte en la playa" className="about-photo" />
              </div>
            </motion.div>

            <motion.div className="about-text" {...revealUp}>
              <h3>Mi Historia</h3>
              <p>
                Mi nombre es Facundo Iriarte. Actualmente estoy cursando Ingeniería Informática en la
                Universidad Argentina de la Empresa (UADE) 2022 - actualidad.
              </p>

              <p>
                Mi experiencia incluye desarrollo fullstack con Java Spring Boot, React, MySQL y REST
                APIs. He trabajado en proyectos como Felsani Motors (marketplace de vehículos) y DryMat
                (e-commerce), aplicando buenas prácticas de programación y enfoque en escalabilidad.
              </p>

              <h3>Mi Enfoque</h3>
              <p>
                Disfruto trabajar en equipo y aportar a la resolución de problemas para alcanzar objetivos
                comunes de manera eficiente. Mi objetivo es seguir creciendo como desarrollador y
                contribuir a proyectos que generen un impacto real.
              </p>

              <h3>Idiomas</h3>
              <p>
                <strong>Español:</strong> Nativo | <strong>Inglés:</strong> Avanzado | <strong>Portugués:</strong>{' '}
                Básico
              </p>

              <div className="about-cta">
                <p>
                  <strong>¿Quieres trabajar juntos o tienes una propuesta?</strong>
                </p>
                <div className="cta-buttons">
                  <a
                    href="https://www.linkedin.com/in/facundo-iriarte-54259b183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Conectar en LinkedIn
                  </a>
                  <a href="mailto:facuiria03@gmail.com" className="btn btn-secondary">
                    Envíame un Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
