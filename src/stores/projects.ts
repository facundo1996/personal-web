
const Allprojects = [
  {
    title: 'Fantasy',
    primary: 'Quasar',
    description: 'Es una aplicación móvil donde los usuarios pueden crear su equipo semanalmente recogiendo 5 acciones de la bolsa de valores. Basado en cómo sean los precios de las acciones seleccionadas, los equipos sumarán o restarán puntos. Al final de cada semana, los 10 mejores equipos ganarán un premio.',
    programming: [
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Maqueté y desarrollé la interfaz basada en el diseño de Figma.',
      'Implementé componentes interactivos y funcionales utilizando Quasar.',
      'Integré un estado global y de gestión de datos mediante Vuex.',
      'Utilicé TypeScript para un desarrollo más estructurado y mantenible.',
    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/fantasy-1.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Stash101',
    primary: 'Vue JS',
    description: 'Anteriormente conocido como ‘Paygrade’, es una simulación de bancos e inversiones para que los estudiantes aprendan sobre finanzas personales, hacer presupuestos, pagar facturas, ganar un ingreso, ahorrar o invertir en el mercado de valores',
    programming: [

    ],
    link: 'www.google.com.ar',
    github: 'www.google.com.ar',
    pictures: ['../../public/stash.png'],
    stack: ['HTML', 'CSS', 'React JS', 'JavaScript', 'Vue JS', 'Vuex', 'Vue Router', 'Material UI'],
  },
  {
    title: 'Cryptocampo',
    primary: 'Vue JS',
    description: 'Primer proyecto web3 en Argentina que logro mezclar la tecnología blockchain con el cultivo agropecuario.',
    programming: [

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