import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import typescript from "../assets/images/typescript.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import materialUI from "../assets/images/material-ui.svg";
import tailwind from "../assets/images/tailwind-css.svg";
import sass from "../assets/images/sass.svg";
import nextjs from "../assets/images/nextjs.svg";

import nodejs from "../assets/images/nodejs.svg";
import nestjs from "../assets/images/nestjs.svg";
import expressjs from "../assets/images/express.png";
import flask from "../assets/images/flask.svg";
import prisma from "../assets/images/prisma.svg";

import mysql from "../assets/images/mysql.svg";
import mongodb from "../assets/images/mongo.png";
import firebase from "../assets/images/firebase.svg";
import postgresql from "../assets/images/postgres.svg";
import tableau from "../assets/images/tableau.svg";
import python from "../assets/images/python.svg";
import pandas from "../assets/images/pandas.svg";
import aiIcon from "../assets/images/artificial-intelligence.png";
import mlIcon from "../assets/images/machine-learning.png";
import deepLearningIcon from "../assets/images/deep-learning.png";
import nlpIcon from "../assets/images/nlp.png";
import imageProcessingIcon from "../assets/images/imageProcessing.svg";

import acmegrade from "../assets/acmegrade.png";
import yhills from "../assets/yhills.png";
import enpointe from "../assets/enpointe.png";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "Frontend Developer",
    description:
      "Explore my frontend tech stack for captivating web experiences.",
    skills: [
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
        icon: js,
      },
      {
        name: "React JS",
        icon: react,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Material UI",
        icon: materialUI,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "SASS",
        icon: sass,
      },
      {
        name: "Next JS",
        icon: nextjs,
      },
    ],
  },
  {
    title: "Backend Developer",
    description:
      "Crafting powerful and secure server-side applications for modern web development.",
    skills: [
      {
        name: "Node.js",
        icon: nodejs,
      },
      {
        name: "Nest JS",
        icon: nestjs,
      },
      {
        name: "Express JS",
        icon: expressjs,
      },
      {
        name: "Flask",
        icon: flask,
      },
      {
        name: "Prisma",
        icon: prisma,
      },
    ],
  },
  {
    title: "Database Technologies",
    description:
      "Designing and managing databases to ensure efficient data storage and retrieval.",
    skills: [
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
      {
        name: "PostgreSQL",
        icon: postgresql,
      },
    ],
  },
  {
    title: "Data Science, AI, and ML",
    description:
      "Harnessing the power of data and AI for intelligent applications.",
    skills: [
      {
        name: "Tableau",
        icon: tableau,
      },
      {
        name: "Python",
        icon: python,
      },
      {
        name: "Pandas",
        icon: pandas,
      },
      {
        name: "Artificial Intelligence",
        icon: aiIcon,
      },
      {
        name: "Machine Learning",
        icon: mlIcon,
      },
      {
        name: "Deep Learning",
        icon: deepLearningIcon,
      },
      {
        name: "Natural Language Processing",
        icon: nlpIcon,
      },
      {
        name: "Image Processing and Recognition",
        icon: imageProcessingIcon,
      },
    ],
  },
];

const experiences = [
  {
    date: "Dec 2022",
    company_name: "Acmegrade",
    url: "https://www.acmegrade.com/",
    cardSubtitle: "AI/ML Developer",
    cardDetailedText:
      "Hands-on experience in developing and deploying AI/ML models for real-world applications",
    logo: acmegrade,
  },
  {
    date: "Feb 2022",
    company_name: "YHills",
    url: "https://yhills.com/",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText:
      "Developing and maintaining web applications using MERN stack and other related technologies.",
    logo: yhills,
  },
  {
    date: "June 2023",
    company_name: "Enpointe",
    url: "https://www.enpointe.io/",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText:
      "Developing and maintaining web applications using MERN stack and other related technologies.",
    logo: enpointe,
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

// export { services, technologies, experiences, testimonials, projects };

export { navLinks, skills, experiences };
