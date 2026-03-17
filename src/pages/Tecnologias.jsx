import '../styles/Tecnologias.css'

export default function Tecnologias() {
  const tecnologias = [
    {
      categoria: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
    },
    {
      categoria: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API']
    },
    {
      categoria: 'Herramientas',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker']
    },
    {
      categoria: 'Otros',
      skills: ['TypeScript', 'Redux', 'Firebase', 'Figma']
    }
  ]

  return (
    <section className="tecnologias">
      <div className="container">
        <h2>Tecnologías & Skills</h2>
        <p className="intro-text">Las tecnologías con las que trabajo y me especializo</p>
        
        <div className="tech-grid">
          {tecnologias.map((tech, index) => (
            <div key={index} className="tech-card">
              <h3>{tech.categoria}</h3>
              <div className="skills-list">
                {tech.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
