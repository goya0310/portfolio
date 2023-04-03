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

export const hero = [
  {
    id: "header",
    title: "Hola, soy ",
  },
];

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

const services = [
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

const technologies = [
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

const projects = [
  {
    name: "Pokémon App",
    description:
      "Desarrollo y diseño en el cual se puede realizar busqueda por nombre, ordenamiento alfabético o por ataque, filtrado por Type o por Origen (Api o DB) y un formulario controlado para la creación de nuevos Pokémon.",
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

export { services, technologies, projects };
