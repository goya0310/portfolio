import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  materialUI,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgresql,
  git,
  figma,
  python,
  pokemonGif,
  pokemon,
  grooveTickets,
  grooveTicketsGif,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "works",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const navLinksEn = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const about = [
  "Descripción.",
  "Soy Desarrollador Web full Stack en formación constante y apasionado por crear soluciones innovadoras. Mi experiencia emprendiendo me llevó a adquirir multiples habilidades entre las cuales la orientación a resultados, trabajar en equipo y el enfoque al cliente son las principales. Espero poder aplicar esta experiencia para dar vida a sus proyectos!.",
];

export const aboutEn = [
  "Description.",
  "I am a full stack web developer in constant training and passionate about creating innovative solutions. My experience in entrepreneurship has led me to acquire multiple skills, among which the orientation towards results, teamwork, and customer focus are the main ones. I hope to apply this experience to bring your projects to life!.",
];

export const services = [
  {
    title: "Soluciones Web",
    icon: web,
  },
  {
    title: "Desarrolador React JS",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Creador de Contenidos",
    icon: creator,
  },
];

export const servicesEn = [
  {
    title: "Web Solutions",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialUI,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const worksIntro =
  "Esta es una seleccion de mis proyectos mas recientes donde se pueden ver las habilidades que he ido adquiriendo como desarrollador FullStack. En cada uno se puede hacer click en play para tener una breve demo y un enlace directo al repositorio de GitHub para que puedas revisar el código fuente. Se puede ver como me he manejado en distintas tecnologías resolviendo desafíos técnicos y dando un enfoque orientado al cliente.";

export const worksIntroEn =
  "This is a selection of my most recent projects where you can see the skills I have been acquiring as a FullStack developer. In each one, you can click on play to have a brief demo and a direct link to the GitHub repository so you can review the source code. You can see how I have handled different technologies, solving technical challenges, and providing a customer-oriented approach.";

export const projects = [
  {
    name: "Pokémon App",
    description:
      "Desarrollo y diseño en el cual se puede realizar busqueda por nombre, ordenamiento alfabético o por ataque, filtrado por Type o por Origen (Api o DB) y un formulario controlado para la creación de nuevos Pokémon.",
    descriptionEn:
      "This is an exciting FullStack development and design project in which you can easily search by name, alphabetical order or by attack, filter by Type or by Origin (Api or DB), and use a controlled form for the creation of new Pokémon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sequelize",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    imageGif: pokemonGif,
    source_code_link: "https://github.com/goya0310/pokemon-app",
  },
  {
    name: "Groove Tickets",
    description:
      "E-Commerce de shows en la ciudad de Mar del Plata. Se pueden realizar filtros combinados, buscar con autocomplete, sumar tickets al carrito, autentificación con Firebase, cuentas de usuario y administrador y pasarela de pagos con MercadoPago",
    descriptionEn:
      "E-Commerce of shows in the city of Mar del Plata. Combined filters can be applied, autocomplete search, adding tickets to the shopping cart, authentication with Firebase, user and administrator accounts, and payment gateway with MercadoPago.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "mercadopago",
        color: "pink-text-gradient",
      },
    ],
    image: grooveTickets,
    imageGif: grooveTicketsGif,
    source_code_link: "https://github.com/goya0310/PG-Henry",
  },
];
