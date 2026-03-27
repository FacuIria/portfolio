import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home() {
  const [typedName, setTypedName] = useState('')
  const [typedRole, setTypedRole] = useState('')
  const [activeProjectFilter, setActiveProjectFilter] = useState('All')

  const heroPhoto = '/images/facundo-playa.jpg'
  const aboutPhoto = '/images/facundo-traje.jpg'
  const fullName = 'Facundo Iriarte'

  const dynamicRoles = [
    'Backend Developer',
    'Full-Stack Developer',
    'Problem Solver',
    'Product-Oriented Developer',
  ]

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
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Felsani Motors',
      category: 'Backend',
      type: 'BACKEND',
      icon: 'fa-car-side',
      code: 'FM',
      description:
        'Backend-oriented vehicle marketplace solution built with Java, Spring Boot, and MySQL, including customer and admin flows.',
      problem:
        'Car listings and purchase flows were fragmented, making discovery and management difficult for users and admins.',
      solution:
        'Designed modular services with clear domain boundaries, role-based actions, and reliable data access layers.',
      impact: [
        'Implemented reusable backend services for cleaner business rules.',
        'Improved navigation efficiency with structured filtering and detail pages.',
        'Reduced future feature complexity through layered architecture decisions.',
      ],
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
      description:
        'E-commerce frontend built with React and Vite focused on responsive UX and a clear conversion-oriented shopping flow.',
      problem:
        'The shopping experience needed a fast, intuitive UI that could adapt well across desktop and mobile devices.',
      solution:
        'Built a reusable component system with responsive layouts, state-driven cart logic, and cleaner UI hierarchy.',
      impact: [
        'Improved consistency with reusable UI patterns.',
        'Enhanced mobile readability and interaction across breakpoints.',
        'Streamlined product-to-cart flow for a more direct user journey.',
      ],
      architecture: ['React Components', 'Client State', 'API Integration'],
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
      repository: 'https://github.com/FacuIria',
      demo: 'mailto:facuiria03@gmail.com?subject=Live%20Demo%20Request%20-%20DryMat',
    },
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'SQL', logo: 'https://cdn.simpleicons.org/sqlite/003B57' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        {
          name: 'Microsoft SQL Server',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        { name: 'JPA/Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg' },
      ],
    },
    {
      category: 'Tools & Version Control',
      items: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF' },
        { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
        { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
        { name: 'Insomnia', logo: 'https://cdn.simpleicons.org/insomnia/5849BE' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      ],
    },
  ]

  const experienceItems = [
    {
      year: '2022 - Present',
      title: 'Computer Engineering - UADE',
      details:
        'Strong foundation in software engineering, algorithms, database systems, and collaborative development.',
    },
    {
      year: '2024 - Present',
      title: 'Web Project Development',
      details:
        'Building backend services and frontend modules with a focus on maintainability and scalability.',
    },
    {
      year: 'Current Focus',
      title: 'Production-Ready Engineering Practices',
      details:
        'Improving architecture, API design, code quality, and product execution for real-world team environments.',
    },
  ]

  const engineeringPillars = [
    {
      title: 'Architecture Mindset',
      description: 'Layered design, modular components, and clear separation of concerns.',
    },
    {
      title: 'Code Quality',
      description: 'Readable naming, reusable abstractions, and maintainable code organization.',
    },
    {
      title: 'API Thinking',
      description: 'RESTful contracts, consistent responses, and robust error handling strategy.',
    },
    {
      title: 'Delivery Focus',
      description: 'Execution with ownership, pragmatic decisions, and product-oriented iteration.',
    },
  ]

  const currentFocus = [
    'System design fundamentals',
    'Backend performance optimization',
    'Testable frontend architecture',
    'Dockerized local environments',
    'Scalable relational data modeling',
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

            <p className="hero-positioning">
              I build reliable software products that connect clean engineering with real user value.
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
              <p>Open to internships and junior backend or frontend opportunities.</p>
            </div>
          </motion.div>

          <motion.div className="hero-image" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-photo-frame">
              <img src={heroPhoto} alt="Facundo Iriarte with suit" className="hero-photo" />
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

          <div className="project-filters" role="tablist" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`project-filter-btn ${activeProjectFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveProjectFilter(filter)}
              >
                {filter}
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
                      <h4>Problem</h4>
                      <p>{project.problem}</p>
                    </article>
                    <article className="case-block">
                      <h4>Solution</h4>
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

                  <div className="architecture-flow" aria-label="Project architecture">
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
                      <i className="fas fa-display"></i> Live Demo
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
                      <div key={`${skill.name}-${rowIndex}-${index}`} className="skill-pill">
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" loading="lazy" />
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
          <motion.h2 {...revealUp}>Experience</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            My learning and engineering progression
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
          <motion.h2 {...revealUp}>Engineering Quality</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            How I approach software beyond just writing code
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
          <motion.h2 {...revealUp}>Current Focus</motion.h2>
          <motion.p className="intro-text" {...revealUp}>
            Areas I am actively sharpening to deliver more value in production teams
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
          <motion.h2 {...revealUp}>About Me</motion.h2>

          <div className="about-content">
            <motion.div className="about-image" {...revealUp}>
              <div className="about-photo-card">
                <img src={aboutPhoto} alt="Facundo Iriarte at the beach" className="about-photo" />
              </div>
            </motion.div>

            <motion.div className="about-text" {...revealUp}>
              <h3>My Story</h3>
              <p>
                My name is Facundo Iriarte. I am currently pursuing a Computer Engineering degree at
                Universidad Argentina de la Empresa (UADE), from 2022 to present.
              </p>

              <p>
                My experience includes backend development with Java Spring Boot, plus frontend modules
                with React, MySQL integration, and REST APIs. I have worked on projects such as Felsani
                Motors and DryMat, applying software best practices with a strong focus on scalability.
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
