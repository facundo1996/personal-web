
const Allprojects = [
  {
    title: 'Fantasy',
    primary: 'Quasar',
    description: 'Es una aplicación móvil donde los usuarios pueden crear su equipo semanalmente recogiendo 5 acciones de la bolsa de valores. Basado en cómo sean los precios de las acciones seleccionadas, los equipos sumarán o restarán puntos. Al final de cada semana, los 10 mejores equipos ganarán un premio.',
    programming: [
      'Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).',
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Integré un estado global y de gestión de datos mediante Vuex.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
      'Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router.',
    ],
    link: '',
    github: '',
    pictures: ['../../public/fantasy-1.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Stash101',
    primary: 'Vue JS',
    description: 'Anteriormente conocido como ‘Paygrade’, es una simulación de bancos e inversiones para que los estudiantes aprendan sobre finanzas personales, hacer presupuestos, pagar facturas, ganar un ingreso, ahorrar o invertir en el mercado de valores',
    programming: [
      'Maqueté el rediseño del proyecto trabajando en conjunto con Figma.',
      'Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).',
      'Adapte el diseño para una mejor respuesta responsiva con múltiples dispositivos y tamaños de pantalla.', 
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Integré un estado global y de gestión de datos mediante Vuex.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
      'Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router.',
    ],
    link: 'https://www.stash.com/stash101/resources/',
    github: '',
    pictures: ['../../public/stash.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Cryptocampo',
    primary: 'Vue JS',
    description: 'Primer proyecto web3 en Argentina que logro mezclar la tecnología blockchain con el cultivo agropecuario.',
    programming: [
      'Desarrollé la interfaz web basada en el diseño proporcionado.',
      'Navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router'
    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/cryptocampo.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'KT-Black',
    primary: 'React JS',
    description: '',
    programming: [

    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/cryptocampo.png', '../../public/incognito.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Incognito',
    primary: 'Vue JS',
    description: 'Una colección NFT de 10.000 tokens de arte 3D en Ethereum Mainnet que se agotó en 12 minutos.',
    programming: [

    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/incognito.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Kasai',
    primary: 'Quasar',
    description: '',
    programming: [

    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/cryptocampo.png', '../../public/incognito.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Capable Maker',
    primary: 'Vue JS',
    description: '',
    programming: [

    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/cryptocampo.png', '../../public/incognito.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
]

const getProject = (title: string) => {
  let projectSelected = Allprojects.find(
    (project) => project.title === title
  );
  return projectSelected;
};

export const projects = { 
  Allprojects, 
  getProject 
}