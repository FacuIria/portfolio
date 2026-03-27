import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home() {
  const [typedName, setTypedName] = useState('')
  const [typedRole, setTypedRole] = useState('')

  const heroPhoto = '/images/facundo-playa.jpg'
  const aboutPhoto = '/images/facundo-traje.jpg'
  const fullName = 'Facundo Iriarte'

  const dynamicRoles = [
    'Full-Stack Developer',
    'Backend Engineer',
    'Problem Solver',
    'Product-Oriented Developer',
  ]

  useEffect(() => {
    let charIndex = 0
    setTypedName('')

    const typingId = window.setInterval(() => {
      charIndex += 1
      setTypedName(fullName.slice(0, charIndex))

      if (charIndex >= fullName.length) {
        window.clearInterval(typingId)
      }
    }, 82)

    return () => window.clearInterval(typingId)
  }, [fullName])

  useEffect(() => {
    let timerId = 0
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeRole = () => {
      const currentRole = dynamicRoles[roleIndex]

      if (!isDeleting) {
        charIndex += 1
        setTypedRole(currentRole.slice(0, charIndex))

        if (charIndex === currentRole.length) {
          isDeleting = true
          timerId = window.setTimeout(typeRole, 1200)
          return
        }

        timerId = window.setTimeout(typeRole, 85)
        return
      }

      charIndex -= 1
      setTypedRole(currentRole.slice(0, charIndex))

      if (charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % dynamicRoles.length
        timerId = window.setTimeout(typeRole, 220)
        return
      }

      timerId = window.setTimeout(typeRole, 42)
    }

    timerId = window.setTimeout(typeRole, 500)

    return () => window.clearTimeout(timerId)
  }, [])

  const proyectos = [
    {
      id: 1,
      titulo: 'Felsani Motors',
      descripcion:
        'Vehicle marketplace built as a full-stack web app using Java, Spring Boot, and MySQL. Includes vehicle filters, detail views, cart management, and an admin panel.',
      tecnologias: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate'],
      impacto: [
        'Structured backend modules for cleaner business logic.',
        'Implemented relational persistence with optimized entity mapping.',
        'Designed admin flows focused on maintainability and scale.',
      ],
      tipo: 'FULL STACK',
      icono: 'fa-car-side',
      codigo: 'FM',
      repositorio: 'https://github.com/FacuIria',
    },
    {
      id: 2,
      titulo: 'DryMat',
      descripcion:
        'E-commerce web app developed with React and Vite. Modern responsive interface with product management and a shopping cart optimized across devices.',
      tecnologias: ['React', 'Vite', 'JavaScript', 'CSS3'],
      impacto: [
        'Built reusable UI components for faster feature delivery.',
        'Improved shopping flow with a clear cart and product UX.',
        'Focused on responsive behavior across desktop and mobile.',
      ],
      tipo: 'FRONTEND',
      icono: 'fa-store',
      codigo: 'DM',
      repositorio: 'https://github.com/FacuIria',
    },
  ]

  const skills = [
    {
      categoria: 'Programming Languages',
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
      categoria: 'Frameworks & Libraries',
      items: [
        { nombre: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { nombre: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { nombre: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { nombre: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      categoria: 'Databases',
      items: [
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        {
          nombre: 'Microsoft SQL Server',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        {
          nombre: 'JPA/Hibernate',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg',
        },
      ],
    },
    {
      categoria: 'Tools & Version Control',
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

  const maxCategoryLength = Math.max(...skills.map((category) => category.items.length))
  const mixedSkills = []

  for (let itemIndex = 0; itemIndex < maxCategoryLength; itemIndex += 1) {
    for (let categoryIndex = 0; categoryIndex < skills.length; categoryIndex += 1) {
      const item = skills[categoryIndex].items[itemIndex]
      if (item) {
        mixedSkills.push(item)
      }
    }
  }

  const skillRows = [
    mixedSkills,
    [...mixedSkills.slice(5), ...mixedSkills.slice(0, 5)],
    [...mixedSkills.slice(9), ...mixedSkills.slice(0, 9)],
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
            <p className="hero-greeting">Hello, welcome to my portfolio</p>
            <h1 className="hero-title">
              I&apos;m <span className="hero-name-animated">{typedName}</span>
            </h1>
            <div className="hero-role-switcher" aria-live="polite">
              <span className="hero-role-label">I define myself as</span>
              <span className="hero-role-dynamic">
                {typedRole}
                <span className="hero-role-cursor" aria-hidden="true">
                  |
                </span>
              </span>
            </div>
            <p className="hero-description">
              Computer Engineering student at UADE focused on building solid, scalable, and well-designed
              products. I enjoy combining business logic, strong user experience, and collaborative work
              to solve real-world problems.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                See My Work
              </a>
              <a href="#about" className="btn btn-secondary">
                About Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/facundo-iriarte-54259b183"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-link-clean social-link-linkedin"
              >
                <i className="fab fa-linkedin-in social-link-icon" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/FacuIria"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-link-clean social-link-github"
              >
                <i className="fab fa-github social-link-icon" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:facuiria03@gmail.com"
                title="Email"
                className="social-link-clean social-link-email"
              >
                <i className="fas fa-envelope social-link-icon" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </div>

            <div className="hero-availability">
              <span className="availability-dot" aria-hidden="true"></span>
              <p>Open to internships and junior full-stack opportunities.</p>
            </div>
          </motion.div>

          <motion.div className="hero-image" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-photo-frame">
              <img src={heroPhoto} alt="Facundo Iriarte con traje" className="hero-photo" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="proyectos-section">
        <div className="container">
          <motion.h2 {...revealUp}>Projects</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            A selection of projects I have built
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
                <div className={`proyecto-imagen proyecto-imagen-${proyecto.id}`}>
                  <i className={`fas ${proyecto.icono}`} aria-hidden="true"></i>
                  <span>{proyecto.codigo}</span>
                </div>

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

                  <ul className="project-impact-list">
                    {proyecto.impacto.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className="btn-repositorio">
                    <i className="fab fa-github"></i> View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <motion.h2 {...revealUp}>Skills</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            Technologies and tools I work with
          </motion.p>

          <motion.div
            className="skills-marquee"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {skillRows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="skills-row">
                <div className="skills-row-track">
                  <div className={`skills-track ${rowIndex % 2 === 0 ? 'left' : 'right'}`}>
                    {[...row, ...row].map((skill, index) => (
                      <div key={`${skill.nombre}-${rowIndex}-${index}`} className="skill-pill">
                        <img src={skill.logo} alt={`Logo de ${skill.nombre}`} className="skill-logo" loading="lazy" />
                        <span>{skill.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <motion.h2 {...revealUp}>About Me</motion.h2>

          <div className="about-content">
            <motion.div className="about-image" {...revealUp}>
              <div className="about-photo-card">
                <img src={aboutPhoto} alt="Facundo Iriarte en la playa" className="about-photo" />
              </div>
            </motion.div>

            <motion.div className="about-text" {...revealUp}>
              <h3>My Story</h3>
              <p>
                My name is Facundo Iriarte. I am currently pursuing a Computer Engineering degree at
                Universidad Argentina de la Empresa (UADE), from 2022 to present.
              </p>

              <p>
                My experience includes full-stack development with Java Spring Boot, React, MySQL, and
                REST APIs. I have worked on projects such as Felsani Motors (vehicle marketplace) and
                DryMat (e-commerce), applying software best practices with a strong focus on scalability.
              </p>

              <h3>My Approach</h3>
              <p>
                I enjoy teamwork and contributing to problem-solving in order to reach shared goals
                efficiently. My objective is to keep growing as a developer and contribute to projects
                that create real impact.
              </p>

              <h3>Languages</h3>
              <p>
                <strong>Spanish:</strong> Native | <strong>English:</strong> Advanced |{' '}
                <strong>Portuguese:</strong> Basic
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div className="contact-panel" {...revealUp}>
            <h2>Let&apos;s Build Something Great</h2>
            <p>
              If you are looking for a developer who can contribute with ownership, clean code, and
              product mindset, I&apos;d be glad to connect.
            </p>

            <div className="contact-actions">
              <a href="mailto:facuiria03@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/facundo-iriarte-54259b183"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Message on LinkedIn
              </a>
              <a
                href="https://github.com/FacuIria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Explore GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
