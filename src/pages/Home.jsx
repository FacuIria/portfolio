import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home({ language = 'es' }) {
  const [typedName, setTypedName] = useState('')
  const [typedRole, setTypedRole] = useState('')
  const [activeProjectFilter, setActiveProjectFilter] = useState('All')
  const portraitSceneRef = useRef(null)

  const handlePortraitMove = (event) => {
    const scene = portraitSceneRef.current
    if (!scene) return

    const bounds = scene.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    scene.style.setProperty('--rotate-y', `${x * 13}deg`)
    scene.style.setProperty('--rotate-x', `${y * -11}deg`)
    scene.style.setProperty('--light-x', `${(x + 0.5) * 100}%`)
    scene.style.setProperty('--light-y', `${(y + 0.5) * 100}%`)
  }

  const resetPortrait = () => {
    const scene = portraitSceneRef.current
    if (!scene) return
    scene.style.setProperty('--rotate-y', '0deg')
    scene.style.setProperty('--rotate-x', '0deg')
    scene.style.setProperty('--light-x', '50%')
    scene.style.setProperty('--light-y', '35%')
  }

  const heroPhoto = '/images/facundo-playa.jpg'
  const aboutPhoto = '/images/facundo-traje.jpg'
  const fullName = 'Facundo Iriarte'

  const isEs = language === 'es'
  const dynamicRoles = isEs
    ? ['Desarrollador Full-Stack', 'Resolución de problemas', 'Desarrollador orientado a producto']
    : ['Full-Stack Developer', 'Problem Solver', 'Product-Oriented Developer']

  const projectFilters = ['All', 'Backend', 'Frontend']

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
  }, [language])

  const projects = [
    {
      id: 1,
      title: 'Felsani Motors',
      category: 'Backend',
      type: 'BACKEND',
      icon: 'fa-car-side',
      code: 'FM',
      description: isEs ? 'Marketplace de vehículos con foco en backend, desarrollado con Java, Spring Boot y MySQL, con flujos para clientes y administradores.' : 'Backend-oriented vehicle marketplace solution built with Java, Spring Boot, and MySQL, including customer and admin flows.',
      problem: isEs ? 'Las publicaciones y los flujos de compra estaban fragmentados, dificultando la búsqueda y la gestión.' : 'Car listings and purchase flows were fragmented, making discovery and management difficult for users and admins.',
      solution: isEs ? 'Diseñé servicios modulares, límites de dominio claros, acciones por rol y capas de acceso a datos confiables.' : 'Designed modular services with clear domain boundaries, role-based actions, and reliable data access layers.',
      impact: isEs ? ['Implementé servicios backend reutilizables para reglas de negocio más claras.', 'Mejoré la navegación con filtros estructurados y páginas de detalle.', 'Reduje la complejidad de nuevas funcionalidades mediante una arquitectura en capas.'] : ['Implemented reusable backend services for cleaner business rules.', 'Improved navigation efficiency with structured filtering and detail pages.', 'Reduced future feature complexity through layered architecture decisions.'],
      architecture: ['Spring Boot API', 'Service Layer', 'MySQL'],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate'],
      repository: 'https://github.com/FacuIria',
      demo: 'mailto:facuiria03@gmail.com?subject=Live%20Demo%20Request%20-%20Felsani%20Motors',
    },
    {
      id: 2,
      title: 'DryMat',
      category: 'Frontend',
      type: 'FRONTEND',
      icon: 'fa-store',
      code: 'DM',
      description: isEs ? 'Frontend de e-commerce creado con React y Vite, enfocado en una experiencia responsive y un flujo de compra claro.' : 'E-commerce frontend built with React and Vite focused on responsive UX and a clear conversion-oriented shopping flow.',
      problem: isEs ? 'La experiencia de compra necesitaba una interfaz rápida e intuitiva que funcionara bien en escritorio y móvil.' : 'The shopping experience needed a fast, intuitive UI that could adapt well across desktop and mobile devices.',
      solution: isEs ? 'Construí un sistema de componentes reutilizables, layouts responsive y lógica de carrito basada en estado.' : 'Built a reusable component system with responsive layouts, state-driven cart logic, and cleaner UI hierarchy.',
      impact: isEs ? ['Mejoré la consistencia mediante patrones de interfaz reutilizables.', 'Optimicé la lectura y la interacción en dispositivos móviles.', 'Simplifiqué el recorrido desde el producto hasta el carrito.'] : ['Improved consistency with reusable UI patterns.', 'Enhanced mobile readability and interaction across breakpoints.', 'Streamlined product-to-cart flow for a more direct user journey.'],
      architecture: ['React Components', 'Client State', 'API Integration'],
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
      repository: 'https://github.com/FacuIria',
      demo: 'mailto:facuiria03@gmail.com?subject=Live%20Demo%20Request%20-%20DryMat',
    },
  ]

  const skills = [
    {
      category: isEs ? 'Lenguajes de programación' : 'Programming Languages',
      items: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg' },
      ],
    },
    {
      category: isEs ? 'Frameworks y librerías' : 'Frameworks & Libraries',
      items: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      category: isEs ? 'Bases de datos' : 'Databases',
      items: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Cassandra', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'InfluxDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg' },
        { name: 'Neo4j', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
        {
          name: 'Microsoft SQL Server',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        { name: 'JPA/Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
      ],
    },
    {
      category: isEs ? 'Herramientas y control de versiones' : 'Tools & Version Control',
      items: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Insomnia', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      ],
    },
  ]

  const experienceItems = [
    {
      year: isEs ? '2022 - Actualidad' : '2022 - Present',
      title: isEs ? 'Ingeniería Informática - UADE' : 'Computer Engineering - UADE',
      details: isEs ? 'Formación sólida en ingeniería de software, algoritmos, bases de datos y desarrollo colaborativo.' : 'Strong foundation in software engineering, algorithms, database systems, and collaborative development.',
    },
    {
      year: isEs ? '2024 - Actualidad' : '2024 - Present',
      title: isEs ? 'Desarrollo de proyectos web' : 'Web Project Development',
      details: isEs ? 'Desarrollo de servicios backend y módulos frontend con foco en mantenibilidad y escalabilidad.' : 'Building backend services and frontend modules with a focus on maintainability and scalability.',
    },
    {
      year: isEs ? 'Enfoque actual' : 'Current Focus',
      title: isEs ? 'Prácticas de ingeniería listas para producción' : 'Production-Ready Engineering Practices',
      details: isEs ? 'Mejora continua en arquitectura, diseño de APIs, calidad de código y ejecución de producto.' : 'Improving architecture, API design, code quality, and product execution for real-world team environments.',
    },
  ]

  const engineeringPillars = [
    {
      title: isEs ? 'Visión de arquitectura' : 'Architecture Mindset',
      description: isEs ? 'Diseño en capas, componentes modulares y separación clara de responsabilidades.' : 'Layered design, modular components, and clear separation of concerns.',
    },
    {
      title: isEs ? 'Calidad de código' : 'Code Quality',
      description: isEs ? 'Nombres claros, abstracciones reutilizables y una organización mantenible.' : 'Readable naming, reusable abstractions, and maintainable code organization.',
    },
    {
      title: isEs ? 'Diseño de APIs' : 'API Thinking',
      description: isEs ? 'Contratos REST, respuestas consistentes y una estrategia robusta de errores.' : 'RESTful contracts, consistent responses, and robust error handling strategy.',
    },
    {
      title: isEs ? 'Foco en entrega' : 'Delivery Focus',
      description: isEs ? 'Ejecución responsable, decisiones pragmáticas e iteración orientada a producto.' : 'Execution with ownership, pragmatic decisions, and product-oriented iteration.',
    },
  ]

  const currentFocus = isEs
    ? ['Fundamentos de diseño de sistemas', 'Optimización de rendimiento backend', 'Arquitectura frontend testeable', 'Entornos locales con Docker', 'Modelado de datos escalable']
    : ['System design fundamentals', 'Backend performance optimization', 'Testable frontend architecture', 'Dockerized local environments', 'Scalable data modeling']

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

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeProjectFilter)
  }, [activeProjectFilter, projects])

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

        <motion.div className="hero-container" initial={false}>
          <motion.div className="hero-text" initial={false}>
            <h1 className="hero-title">
              {isEs ? 'Soy ' : "I'm "}<span className="hero-name-animated">{typedName}</span>
            </h1>
            <div className="hero-role-switcher" aria-live="polite">
              <span className="hero-role-label">{isEs ? 'Me defino como' : 'I define myself as'}</span>
              <span className="hero-role-dynamic">
                {typedRole}
                <span className="hero-role-cursor" aria-hidden="true">
                  |
                </span>
              </span>
            </div>
            <p className="hero-description">
              {isEs ? 'Estudiante de Ingeniería Informática en UADE, enfocado en crear productos sólidos, escalables y bien diseñados. Disfruto combinar lógica de negocio, una buena experiencia de usuario y trabajo colaborativo para resolver problemas reales.' : 'Computer Engineering student at UADE focused on building solid, scalable, and well-designed products. I enjoy combining business logic, strong user experience, and collaborative work to solve real-world problems.'}
            </p>

            <p className="hero-positioning">
              {isEs ? 'Creo productos de software confiables que conectan ingeniería de calidad con valor real para las personas.' : 'I build reliable software products that connect clean engineering with real user value.'}
            </p>

            <div className="hero-stack" aria-label={isEs ? 'Tecnologías principales' : 'Core technologies'}>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>SQL & NoSQL</span>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                {isEs ? 'Ver proyectos' : 'See My Work'}
              </a>
              <a href="#about" className="btn btn-secondary">
                {isEs ? 'Sobre mí' : 'About Me'}
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
              <p>{isEs ? 'Disponible para pasantías y oportunidades junior de backend o frontend.' : 'Open to internships and junior backend or frontend opportunities.'}</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={false}
            ref={portraitSceneRef}
            onPointerMove={handlePortraitMove}
            onPointerLeave={resetPortrait}
            aria-label={isEs ? 'Escena 3D interactiva que representa desarrollo de software' : 'Interactive 3D software development scene'}
          >
            <div className="scene-halo" aria-hidden="true"></div>
            <div className="scene-orbit scene-orbit-a" aria-hidden="true"><span></span></div>
            <div className="scene-orbit scene-orbit-b" aria-hidden="true"><span></span></div>
            <div className="scene-cube scene-cube-a" aria-hidden="true"><i></i></div>
            <div className="scene-cube scene-cube-b" aria-hidden="true"><i></i></div>

            <div className="hero-portrait-object">
              <img src={heroPhoto} alt={isEs ? 'Retrato de Facundo Iriarte' : 'Portrait of Facundo Iriarte'} width="840" height="1120" fetchPriority="high" />
              <div className="portrait-reflection" aria-hidden="true"></div>
              <div className="portrait-index" aria-hidden="true"><span>01</span><b>FACUNDO<br />IRIARTE</b></div>
            </div>

            <div className="code-object">
              <div className="code-object-bar">
                <div className="window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
                <span>facundo.dev</span>
                <span className="code-status"><i></i> online</span>
              </div>
              <div className="code-object-body" aria-hidden="true">
                <span><b>01</b><em>const</em> developer = {'{'}</span>
                <span><b>02</b>&nbsp;&nbsp;name: <strong>'Facundo'</strong>,</span>
                <span><b>03</b>&nbsp;&nbsp;status: <strong>'building'</strong></span>
                <span><b>04</b>{'}'}</span>
              </div>
              <div className="code-object-footer">
                <span>FULL-STACK</span>
                <span>BUENOS AIRES · AR</span>
              </div>
            </div>

            <div className="scene-label scene-label-api" aria-hidden="true"><span>02</span> API DESIGN</div>
            <div className="scene-label scene-label-ui" aria-hidden="true"><span>03</span> PRODUCT UI</div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="proyectos-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Proyectos' : 'Projects'}</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            {isEs ? 'Una selección de proyectos que desarrollé' : 'A selection of projects I have built'}
          </motion.p>

          <div className="project-filters" role="group" aria-label={isEs ? 'Filtros de proyectos' : 'Project filters'}>
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`project-filter-btn ${activeProjectFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveProjectFilter(filter)}
              >
                {isEs && filter === 'All' ? 'Todos' : filter}
              </button>
            ))}
          </div>

          <div className="proyectos-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="proyecto-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <div className="proyecto-tipo">{project.type}</div>
                <div className={`proyecto-imagen proyecto-imagen-${project.id}`}>
                  <i className={`fas ${project.icon}`} aria-hidden="true"></i>
                  <span>{project.code}</span>
                </div>

                <div className="proyecto-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="case-study-grid">
                    <article className="case-block">
                      <h4>{isEs ? 'Problema' : 'Problem'}</h4>
                      <p>{project.problem}</p>
                    </article>
                    <article className="case-block">
                      <h4>{isEs ? 'Solución' : 'Solution'}</h4>
                      <p>{project.solution}</p>
                    </article>
                  </div>

                  <div className="proyecto-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="architecture-flow" aria-label={isEs ? 'Arquitectura del proyecto' : 'Project architecture'}>
                    {project.architecture.map((node, i) => (
                      <div key={node} className="architecture-step">
                        <span>{node}</span>
                        {i < project.architecture.length - 1 ? (
                          <i className="fas fa-chevron-right" aria-hidden="true"></i>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <ul className="project-impact-list">
                    {project.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    <a href={project.demo} className="btn-repositorio btn-demo-link">
                      <i className="fas fa-display"></i> {isEs ? 'Solicitar demo' : 'Request demo'}
                    </a>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="btn-repositorio">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Tecnologías' : 'Skills'}</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            {isEs ? 'Tecnologías y herramientas con las que trabajo' : 'Technologies and tools I work with'}
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
                      <div key={`${skill.name}-${rowIndex}-${index}`} className="skill-pill">
                        <span className="skill-icon" aria-hidden="true">
                          <img
                            src={skill.logo}
                            alt=""
                            className="skill-logo"
                            loading="lazy"
                            onError={(event) => event.currentTarget.parentElement.classList.add('icon-error')}
                          />
                          <span className="skill-icon-fallback">{skill.name.slice(0, 2).toUpperCase()}</span>
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Experiencia' : 'Experience'}</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            {isEs ? 'Mi evolución académica y profesional' : 'My learning and engineering progression'}
          </motion.p>

          <div className="experience-timeline">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="engineering" className="engineering-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Calidad de ingeniería' : 'Engineering Quality'}</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            {isEs ? 'Cómo abordo el software más allá de escribir código' : 'How I approach software beyond just writing code'}
          </motion.p>

          <div className="engineering-grid">
            {engineeringPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="engineering-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="focus-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Enfoque actual' : 'Current Focus'}</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            {isEs ? 'Áreas que estoy profundizando para aportar más valor en equipos de producto' : 'Areas I am actively sharpening to deliver more value in production teams'}
          </motion.p>

          <motion.div className="focus-cloud" {...revealUp}>
            {currentFocus.map((item) => (
              <span key={item} className="focus-pill">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <motion.h2 {...revealUp}>{isEs ? 'Sobre mí' : 'About Me'}</motion.h2>

          <div className="about-content">
            <motion.div className="about-image" {...revealUp}>
              <div className="about-photo-card">
                <img src={aboutPhoto} alt="Facundo Iriarte" className="about-photo" width="840" height="1120" loading="lazy" />
              </div>
            </motion.div>

            <motion.div className="about-text" {...revealUp}>
              <h3>{isEs ? 'Mi historia' : 'My Story'}</h3>
              <p>
                {isEs ? 'Mi nombre es Facundo Iriarte. Estudio Ingeniería Informática en la Universidad Argentina de la Empresa (UADE) desde 2022.' : 'My name is Facundo Iriarte. I am currently pursuing a Computer Engineering degree at Universidad Argentina de la Empresa (UADE), from 2022 to present.'}
              </p>

              <p>
                {isEs ? 'Mi experiencia incluye desarrollo backend con Java y Spring Boot, módulos frontend con React, integración con MySQL y APIs REST. Trabajé en proyectos como Felsani Motors y DryMat, aplicando buenas prácticas con foco en escalabilidad.' : 'My experience includes backend development with Java Spring Boot, plus frontend modules with React, MySQL integration, and REST APIs. I have worked on projects such as Felsani Motors and DryMat, applying software best practices with a strong focus on scalability.'}
              </p>

              <h3>{isEs ? 'Mi enfoque' : 'My Approach'}</h3>
              <p>
                {isEs ? 'Disfruto el trabajo en equipo y aportar a la resolución de problemas para alcanzar objetivos compartidos. Busco seguir creciendo como desarrollador y contribuir a proyectos con impacto real.' : 'I enjoy teamwork and contributing to problem-solving in order to reach shared goals efficiently. My objective is to keep growing as a developer and contribute to projects that create real impact.'}
              </p>

              <h3>{isEs ? 'Idiomas' : 'Languages'}</h3>
              <p>
                <strong>{isEs ? 'Español:' : 'Spanish:'}</strong> {isEs ? 'Nativo' : 'Native'} | <strong>{isEs ? 'Inglés:' : 'English:'}</strong> {isEs ? 'Avanzado' : 'Advanced'} |{' '}
                <strong>{isEs ? 'Portugués:' : 'Portuguese:'}</strong> {isEs ? 'Básico' : 'Basic'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div className="contact-panel" {...revealUp}>
            <h2>{isEs ? 'Construyamos algo valioso' : "Let's Build Something Great"}</h2>
            <p>
              {isEs ? 'Si buscás un desarrollador que aporte responsabilidad, código limpio y mentalidad de producto, me encantaría conversar.' : "If you are looking for a developer who can contribute with ownership, clean code, and product mindset, I'd be glad to connect."}
            </p>

            <div className="contact-actions">
              <a href="mailto:facuiria03@gmail.com" className="btn btn-primary">
                {isEs ? 'Enviar email' : 'Send Email'}
              </a>
              <a
                href="https://www.linkedin.com/in/facundo-iriarte-54259b183"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {isEs ? 'Escribir por LinkedIn' : 'Message on LinkedIn'}
              </a>
              <a
                href="https://github.com/FacuIria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {isEs ? 'Ver GitHub' : 'Explore GitHub'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
