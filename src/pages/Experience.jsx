import '../styles/Experience.css'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      puesto: 'Desarrollador Full Stack Junior',
      empresa: 'Tu Empresa/Proyecto',
      periodo: 'Enero 2024 - Presente',
      descripcion: [
        'Desarrollo de aplicaciones web con React y Node.js',
        'Diseño y optimización de bases de datos',
        'Implementación de características con Framer Motion',
        'Trabajo en equipo con metodologías ágiles'
      ]
    },
    {
      id: 2,
      puesto: 'Estudiante de Ingeniería Informática',
      empresa: 'UADE - Universidad Argentina de la Empresa',
      periodo: '2021 - Presente',
      descripcion: [
        'Tercer año de la carrera',
        'Especialización en desarrollo full stack',
        'Desarrollo de proyectos académicos',
        'Aprendizaje continuo de nuevas tecnologías'
      ]
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2>Experiencia</h2>
        <p className="intro-text">Mi trayectoria profesional y académica</p>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="exp-header">
                <h3>{exp.puesto}</h3>
                <p className="exp-empresa">{exp.empresa}</p>
                <span className="exp-periodo">{exp.periodo}</span>
              </div>
              <div className="exp-description">
                <ul>
                  {exp.descripcion.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
