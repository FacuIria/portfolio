# Facundo Iriarte - Portfolio Personal

Un portfolio moderno y responsivo creado con **React**, **Vite** y **React Router**.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Componentes reutilizables
- ⚡ Powered by Vite (construcción rápida)
- 🧭 Navegación fluida con React Router
- 📱 Totalmente adaptado a dispositivos móviles
- 🎯 Animaciones suaves

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   └── Navbar.jsx      # Navegación principal
│   ├── pages/              # Páginas principales
│   │   ├── Home.jsx        # Página de inicio
│   │   ├── Tecnologias.jsx # Skills y tecnologías
│   │   ├── Proyectos.jsx   # Galería de proyectos
│   │   └── AboutMe.jsx     # Información personal
│   ├── styles/             # Estilos CSS
│   │   ├── index.css       # Estilos globales
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Tecnologias.css
│   │   ├── Proyectos.css
│   │   └── AboutMe.css
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias
└── README.md               # Este archivo
```

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repo>
   cd portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador:**
   ```
   http://localhost:5173
   ```

## 📝 Personalización

### 1. **Home (Introducción)**
Edita [src/pages/Home.jsx](src/pages/Home.jsx):
- Cambia el nombre y descripción
- Ajusta los enlaces de redes sociales
- Personaliza los botones de CTA

### 2. **Tecnologías**
Edita [src/pages/Tecnologias.jsx](src/pages/Tecnologias.jsx):
```jsx
const tecnologias = [
  {
    categoria: 'Frontend',
    skills: ['React', 'JavaScript', '...'] // Agrega tus skills
  },
  // ...
]
```

### 3. **Proyectos**
Edita [src/pages/Proyectos.jsx](src/pages/Proyectos.jsx):
```jsx
const proyectos = [
  {
    id: 1,
    titulo: 'Mi Proyecto',
    descripcion: '...',
    tecnologias: ['React', '...'],
    imagen: '🎨', // Emoji o URL de imagen
    link: 'https://...' // Link al proyecto
  },
  // ...
]
```

### 4. **About Me**
Edita [src/pages/AboutMe.jsx](src/pages/AboutMe.jsx):
- Vuelve a escribir tu historia
- Ajusta los números de estadísticas
- Personaliza tus intereses
- Actualiza el email de contacto

### 5. **Estilos Generales**
Los colores principales están definidos en los archivos CSS:
- Color primario: `#3498db` (azul)
- Color secundario: `#2ecc71` (verde)
- Fondo oscuro: `#2c3e50`

Puedes cambiarlos globalmente buscando estos colores en los archivos CSS.

## 🎯 Rutas Disponibles

- `/` - Home (Introducción)
- `/tecnologias` - Tecnologías y Skills
- `/proyectos` - Mis Proyectos
- `/about` - Sobre Mí

## 🚢 Desplegar

### Build para producción:
```bash
npm run build
```

Esto generará una carpeta `dist` lista para desplegar.

### Opciones de hosting:
- **Vercel**: `vercel deploy`
- **Netlify**: Conecta tu repo de GitHub
- **GitHub Pages**: Configura en `vite.config.js`
- **AWS S3**: Sube la carpeta `dist`

## 📦 Dependencias

- **React 18.2.0** - Librería UI
- **React Router 6.20.0** - Enrutamiento
- **Vite 5.0.8** - Build tool

## 🎨 Diseño Responsivo

El portfolio está optimizado para:
- 📱 Móviles (480px+)
- 📱 Tablets (768px+)
- 🖥️ Escritorio (1024px+)

## 💡 Tips

1. **Agregar más páginas:**
   - Crea un archivo en `src/pages/`
   - Importa en `App.jsx`
   - Agrega una ruta en `Router`

2. **Cambiar colores:**
   - Los gradientes se usan mucho, están en los CSS
   - Busca `linear-gradient()` para modificarlos

3. **Agregar imágenes:**
   - Crea una carpeta `src/images/`
   - Importa y usa en tus componentes

4. **Animaciones:**
   - Las transiciones están en CSS3
   - Modifica los valores de `transition` para cambiar velocidad

## 🐛 Troubleshooting

Si `npm run dev` no funciona:
```bash
# Limpia node_modules
rm -rf node_modules
npm install
npm run dev
```

## 📞 Contacto

Actualiza tus redes sociales y email en:
- [Home.jsx](src/pages/Home.jsx) - Enlaces sociales
- [AboutMe.jsx](src/pages/AboutMe.jsx) - Email de contacto

---

**¡Listo para mostrar tu trabajo al mundo! 🚀**
