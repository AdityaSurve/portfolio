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

import c from "../assets/images/c.svg";
import cpp from "../assets/images/cpp.svg";
import java from "../assets/images/java.svg";
import flutter from "../assets/images/flutter.svg";
import git from "../assets/images/git.svg";
import github from "../assets/images/github.svg";
import kotlin from "../assets/images/kotlin.svg";

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

const tech = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: js,
  },
  {
    id: 4,
    name: "React JS",
    icon: react,
  },
  {
    id: 5,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    id: 7,
    name: "Material UI",
    icon: materialUI,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 9,
    name: "SASS",
    icon: sass,
  },
  {
    id: 10,
    name: "Next JS",
    icon: nextjs,
  },
  {
    id: 11,
    name: "Node.js",
    icon: nodejs,
  },
  {
    id: 12,
    name: "Nest JS",
    icon: nestjs,
  },
  {
    id: 13,
    name: "Express JS",
    icon: expressjs,
  },
  {
    id: 14,
    name: "Flask",
    icon: flask,
  },
  {
    id: 15,
    name: "Prisma",
    icon: prisma,
  },
  {
    id: 16,
    name: "MySQL",
    icon: mysql,
  },
  {
    id: 17,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 18,
    name: "Firebase",
    icon: firebase,
  },
  {
    id: 19,
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    id: 20,
    name: "Tableau",
    icon: tableau,
  },
  {
    id: 21,
    name: "Python",
    icon: python,
  },
  {
    id: 22,
    name: "Pandas",
    icon: pandas,
  },
  {
    id: 23,
    name: "Artificial Intelligence",
    icon: aiIcon,
  },
  {
    id: 24,
    name: "Machine Learning",
    icon: mlIcon,
  },
  {
    id: 25,
    name: "Deep Learning",
    icon: deepLearningIcon,
  },
  {
    id: 26,
    name: "Natural Language Processing",
    icon: nlpIcon,
  },
  {
    id: 27,
    name: "Image Processing and Recognition",
    icon: imageProcessingIcon,
  },
  {
    id: 28,
    name: "C",
    icon: c,
  },
  {
    id: 29,
    name: "C++",
    icon: cpp,
  },
  {
    id: 30,
    name: "Java",
    icon: java,
  },
  {
    id: 31,
    name: "Flutter",
    icon: flutter,
  },
  {
    id: 32,
    name: "Git",
    icon: git,
  },
  {
    id: 33,
    name: "GitHub",
    icon: github,
  },
  {
    id: 34,
    name: "Kotlin",
    icon: kotlin,
  },
];

export { navLinks, skills, experiences, tech };
