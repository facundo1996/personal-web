import fantasy from '@/images/fantasy-1.png';
import stash from '@/images/stash.png';
import cryptocampo from '@/images/cryptocampo.png';
import ktBlack1 from '@/images/kt-black.png';
import ktBlack2 from '@/images/kt-black-2.png';
import incognito from '@/images/incognito.png';
import kasai1 from '@/images/kasai-1.png';
import kasai2 from '@/images/kasai-2.png';
import capable from '@/images/capable.png';
import crazybaboonz from '@/images/crazybaboonz.png';
import onlineShop1 from '@/images/online-shop-1.png';
import onlineShop2 from '@/images/online-shop-2.png';
import todolist1 from '@/images/todolist1.png';
import todolist2 from '@/images/todolist2.png';
import amazonia from '@/images/amazonia.png';
import drpaula from '@/images/drpaula.png';
import gupa from '@/images/gupa.png';
import leozea from '@/images/leozea.png';
import chiaenvy from '@/images/chiaenvy.png';
import vagontravel from '@/images/vagontravel.png';
import whaley from '@/images/whaley.png';

export interface Project {
  title: string
  primary: string
  description: string
  programming: string[]
  link: string
  github: string
  pictures: string[]
  stack: string[]
  border?: boolean
}

const Allprojects: Project[] = [
  {
    title: 'Gupa',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para Gupa, una empresa dedicada a soluciones inmobiliarias y responsabilidad social en México.',
    programming: [],
    link: 'https://gupamx.com/',
    github: '',
    pictures: [gupa],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Leo Zea',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para Leo Zea, un estudio jurídico que ofrece servicios legales y de consultoría en México.',
    programming: [],
    link: 'https://leozea.com/',
    github: '',
    pictures: [leozea],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Chia Envy',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para Chia Envy, una empresa dedicada a la venta de productos de chia en México.',
    programming: [],
    link: 'https://chiaenvy.com/',
    github: '',
    pictures: [chiaenvy],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Whaley',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para Whaley',
    programming: [],
    link: 'https://whaley.mx/',
    github: '',
    pictures: [whaley],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Vagon Travel',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para Vagon Travel, una empresa dedicada al turismo en México.',
    programming: [],
    link: 'https://vagontravel.com',
    github: '',
    pictures: [vagontravel],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Dra Paula Gutierrez',
    primary: 'Kirby',
    description: 'Trabajo realizado de la mano de GoldenSub para una cirujana especializada en medicina estética y antienvejecimiento.',
    programming: [],
    link: 'https://drapaulagutierrez.com/',
    github: '',
    pictures: [drpaula],
    stack: ['Kirby CMS', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Fantasy',
    primary: 'Quasar',
    description: 'Es una aplicación móvil donde los usuarios pueden crear su equipo semanalmente recogiendo 5 acciones de la bolsa de valores. Basado en cómo sean los precios de las acciones seleccionadas, los equipos sumarán o restarán puntos. Al final de cada semana, los 10 mejores equipos ganarán un premio.',
    programming: [
      'Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).',
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs en el proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Integré un estado global y de gestión de datos mediante Vuex.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
      'Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router.',
    ],
    link: '',
    github: '',
    pictures: [fantasy],
    stack: ['Quasar', 'TypeScript', 'jQuery', 'JavaScript', 'Vuex', 'Vue Router', 'CSS'],
  },
  {
    title: 'Stash101',
    primary: 'Vue JS',
    description: 'Anteriormente conocido como ‘Paygrade’, es una simulación de bancos e inversiones para que los estudiantes aprendan sobre finanzas personales, hacer presupuestos, pagar facturas, ganar un ingreso, ahorrar o invertir en el mercado de valores',
    programming: [
      'Maqueté el rediseño del proyecto trabajando en conjunto con Figma.',
      'Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.',
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
    ],
    link: 'https://www.stash.com/',
    github: '',
    pictures: [stash],
    stack: ['Vue JS', 'JavaScript', 'jQuery', 'Vuex', 'Vue Router', 'HTML', 'CSS', 'Bootstrap'],
    border: true,
  },
  {
    title: 'Cryptocampo',
    primary: 'Vue JS',
    description: 'Primer proyecto web3 en Argentina que logró mezclar la tecnología blockchain con el cultivo agropecuario.',
    programming: [
      'Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).',
      'Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.',
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
    ],
    link: 'https://cryptocampo.app/#/',
    github: '',
    pictures: [cryptocampo],
    stack: ['Vue JS', 'TypeScript', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'KT-Black',
    primary: 'React JS',
    description: 'Es una plataforma en línea que ofrece una variedad de servicios relacionados con el desarrollo de software y la consultoría tecnológica. Su enfoque principal es brindar soluciones en diferentes áreas, como desarrollo de software, transformación digital y servicios de infraestructura. La plataforma busca ayudar a las empresas a alcanzar sus objetivos y enfrentar los desafíos del mundo digital actual.',
    programming: [
      "Maqueté el proyecto trabajando en conjunto con el diseñador (Adobe XD).",
      "Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.",
      "Creé y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.",
      "Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.",
    ],
    link: 'https://www.ktblack.com/s/',
    github: '',
    pictures: [ktBlack1, ktBlack2],
    stack: ['React', 'TypeScript', 'Material UI', 'JavaScript', 'CSS' ],
    border: true,
  },
  {
    title: 'Incognito',
    primary: 'Vue JS',
    description: 'Una colección NFT de 10.000 tokens de arte 3D en Ethereum Mainnet que se agotó en 12 minutos.',
    programming: [
      "Maqueté y desarrollé la interfaz basada en el diseño de Figma, incluyendo una galería robusta, gestionando más de 10,000 imágenes mediante llamadas a API. Con varios filtros y paginación a través de query parameters para lograr una experiencia fluida y optimizada.",
      "Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.",
      "Creé y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.",
      "Integré un estado global y de gestión de datos mediante Vuex.",
      "Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.",
      "Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router."
    ],
    link: 'https://incognitonft.com/',
    github: '',
    pictures: [incognito],
    stack: ['Vue JS', 'JavaScript', 'jQuery', 'Vuex', 'Vue Router', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'Kasai',
    primary: 'Quasar',
    description: 'Kasai es una aplicación de conectividad diseñada para mejorar tu experiencia escolar. Proporcionan una herramienta educativa integral que le permite conectarse con compañeros de estudio y eventos relacionados con el campus, brindando una experiencia educativa más rica y exitosa.',
    programming: [
      "Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).",
      "Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.",
      "Integré Google maps y Google autocomplete.",
      "Creé y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.",
      "Integré un estado global y de gestión de datos mediante Vuex.",
      "Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.",
      "Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router."
    ],
    link: 'https://play.google.com/store/apps/details?id=com.kasai.app&hl=en_US&gl=US',
    github: '',
    pictures: [kasai1, kasai2],
    stack: ['Quasar', 'JavaScript', 'Vuex', 'Vue Router', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Capable Maker',
    primary: 'Vue JS',
    description: 'Es un sitio web que ofrece recursos y tutoriales para aquellos interesados en la fabricación y creación de proyectos. Proporciona información sobre electrónica, programación, impresión 3D y otros temas relacionados. Además, ofrece guías paso a paso, videos y contenido educativo para ayudar a los usuarios a aprender y desarrollar sus habilidades en el campo de la fabricación.',
    programming: [
      'Maqueté el proyecto trabajando en conjunto con el diseñador (Figma/Adobe XD).',
      'Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.',
      'Trabajé en conjunto con el equipo de Backend para integrar las APIs al proyecto.',
      'Cree y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.',
      'Integré un estado global y de gestión de datos mediante Vuex.',
      'Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.',
      'Trabajé en una navegación fluida y eficiente entre las diferentes vistas utilizando Vue Router.',
    ],
    link: 'https://capablemaker.com/',
    github: '',
    pictures: [capable],
    stack: ['Vue JS', 'JavaScript', 'Bootstrap', 'Vuex', 'Vue Router', 'HTML', 'CSS', 'jQuery'],
  },
  {
    title: 'Crazy Baboonz',
    primary: 'React JS',
    description: 'Una colección compuesta por 10,000 NFT Crazy Baboonz generados de manera aleatoria y únicos, los cuales viven en la cadena de bloques de Ethereum.',
    programming: [
      "Maqueté y desarrollé la interfaz basada en el diseño de Figma, incluyendo una galería robusta, gestionando más de 10,000 imágenes mediante llamadas a API. Con varios filtros y paginación a través de query parameters para lograr una experiencia fluida y optimizada.",
      "Adapté el diseño para una mejor respuesta responsive con múltiples dispositivos y tamaños de pantalla.",
      "Creé y rehíce componentes interactivos, funcionales y reutilizables con el fin de una mejor optimización del proyecto.",
      "Utilicé TypeScript para un desarrollo más estructurado y fácil de mantener.",
    ],
    link: 'https://crazybaboonz.io/',
    github: '',
    pictures: [crazybaboonz],
    stack: ['React JS', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'On-line Shop',
    primary: 'Vue JS',
    description: 'Este proyecto de prueba técnica simula una tienda virtual que incorpora elementos esenciales como una barra de búsqueda, un carrito de compras y un sistema de filtrado por categorías. Haciendo una integración efectiva de una API pública para obtener una amplia variación de productos.',
    programming: [],
    link: 'https://on-line-shop-vue.netlify.app/',
    github: 'https://github.com/facundo1996/tienda-virtual',
    pictures: [onlineShop1, onlineShop2],
    stack: ['Vue JS', 'Vite', 'JavaScript', 'Vuex', 'Vue Router', 'Prime Vue', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    title: 'To do list',
    primary: 'Next JS',
    description: 'Un proyecto de práctica en el cual implementé mis conocimientos de Next.js y la creación de un CRUD. La aplicación se enfoca en la gestión de notas y recordatorios.',
    programming: [],
    link: '',
    github: 'https://github.com/facundo1996/to-do-list',
    pictures: [todolist1, todolist2],
    stack: ['Next JS', 'JavaScript', 'Tailwind', 'Prisma', 'HTML', 'CSS'],
  },
  {
    title: 'Amazonía',
    primary: 'React JS',
    description: 'Proyecto que realice de forma independiente para un cliente. Amazonia es una empresa de construcción que revoluciona el sector con su enfoque innovador, se destaca por su compromiso con la calidad, la durabilidad y la responsabilidad ambiental, liderando el camino hacia un futuro de construcción moderna y eficiente.',
    programming: [
      'Maquetación.',
      'Hosting.',
      'Colaboración con el cliente.',
      'Colaboración con el diseñador.',
    ],
    link: 'https://www.amazoniaamz.com/',
    github: 'https://github.com/facundo1996/amazonia',
    pictures: [amazonia],
    stack: ['React JS', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
  },
]

const getProject = (title: string): Project | undefined => {
  return Allprojects.find((project) => project.title === title)
}

export const projects = {
  Allprojects,
  getProject
}