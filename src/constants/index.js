import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  livvy,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  youtube,
  rightangle,
  growthri,
  project2, project3, umeshsir
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content Creator",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Teaching and developing web development, Blockchain development, Mobile development , competitive programming and DSA.",
      "Building creative and responsive website designs & mobile app in my channel.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Right Angle Academy",
    icon: rightangle,
    iconBg: "#E6DEDD",
    date: "sep 2022 - Dec 2022",
    points: [
      "Developing a Educational Website from Scratch with awesome feature using React.js and other related technologies.",
      "Create a interior design website from scratch with whatsapp chat feature and filtering section.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Grow-Thri",
    icon: growthri,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "I learn from experienced software developers and gain valuable hands-on experience in software development",
      "My daily tasks may include writing and debugging code, testing and deploying software, participating in code reviews.",
    ],
  },
  
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but yash proved me wrong.",
    name: "Umesh Jangid",
    designation: "Founder",
    company: "Right Angle Academy",
    image: umeshsir,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Tushar",
    designation: "CTO",
    company: "Grow-Thri",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    index: 1,
    name: "App Landing Website",
    description:
      "Livvy website have an attractive user interface that showcases the features and benefits of the mobile app in a clear and concise way. It should include a detailed description of the mobile app, including screenshots, videos, and user reviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    category: "Web App",
    image: livvy,
    source_code_link: "https://github.com/",
    live_link: "https://starlit-griffin-4512e5.netlify.app/",
  },
  {
    index: 2,
    name: "Interior Decoration",
    description:
      "interior decoration website is an online platform that showcases your work as an interior designer to potential clients. The goal of the website is to showcase your design skills & your work to potential employers , creativity, and style to attract new clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    category: "Web App",
    image: project2,
    source_code_link: "https://github.com/",
    live_link: "https://deepakinterior.com/"
  },
  {
    index: 3,
    name: "Educational Platform",
    description:
      "online tutoring website is a platform designed to connect students with tutors who can provide academic support. This website should be user-friendly, engaging, and should offer a range of features that enable students to connect with tutors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    category: "Mobile App",
    image: project3,
    source_code_link: "https://github.com/",
    live_link: "https://therightangleacademy.co.in/",
  },  
 
 
];

export { services, technologies, experiences, testimonials, projects };