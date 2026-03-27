import '../styles/Proyectos.css'

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: 'E-commerce Platform',
      descripcion: 'Plataforma de compras online con carrito, pago y admin panel',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      tipo: 'WEB APP',
      imagen: 'EC',
      repositorio: '#'
    },
    {
      id: 2,
      titulo: 'Task Manager App',
      descripcion: 'Aplicación para gestionar tareas con autenticación de usuarios',
      tecnologias: ['React', 'Firebase', 'CSS3'],
      tipo: 'FRONTEND',
      imagen: 'TM',
      repositorio: '#'
    },
    {
      id: 3,
      titulo: 'Weather App',
      descripcion: 'App de clima en tiempo real consumiendo datos de API externa',
      tecnologias: ['React', 'API REST', 'Axios'],
      tipo: 'FRONTEND',
      imagen: 'WA',
      repositorio: '#'
    },
    {
      id: 4,
      titulo: 'Social Network',
      descripcion: 'Red social con sistema de posts, comentarios y likes',
      tecnologias: ['React', 'Node.js', 'PostgreSQL'],
      tipo: 'WEB APP',
      imagen: 'SN',
      repositorio: '#'
    }
  ]

  return (
    <section className="proyectos">
      <div className="container">
        <h2>Proyectos</h2>
        <p className="intro-text">Algunos de los proyectos en los que he trabajado</p>
        
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              <div className="proyecto-tipo">{proyecto.tipo}</div>
              
              <div className="proyecto-imagen">{proyecto.imagen}</div>
              
              <div className="proyecto-content">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                
                <div className="proyecto-tech">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <a href={proyecto.repositorio} className="btn-repositorio">
                  <i className="fab fa-github"></i> Ver Repositorio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
