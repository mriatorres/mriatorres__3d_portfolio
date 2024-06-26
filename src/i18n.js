import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Translation, initReactI18next } from 'react-i18next';
import { technologies } from './constants';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en:{
            translation: {
                greeting: "Hi I'm ",
                description1: "I develop user interfaces",
                description2: "and web applications",
                introduction: "Introduction",
                overview: "Overview",
                overviewDesc: "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Ruby on rails. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
                technologies: "Technologies",
                technologiesDesc: "The following objects indicate the various software development tools that I have had the privilege to work with throughout my career. These experiences have provided me with a strong foundation in software engineering and have enabled me to deliver cutting-edge solutions to clients across various industries.",
                work: "My work",
                projects: "Projects",
                projectsDesc: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
                getInTouch: "Get in touch",
                contact: "Contact",
                yourName: "Your name",
                namePH: "What's your name?",
                yourEmail: "Your e-mail",
                emailPH: "What's your email?",
                yourMessage: "Your message",
                messagePH: "What do you want to say?",
                sending: "Sending...",
                send: "Send",
            },
        },
        fr:{
            translation:{
                greeting: "Salut, je suis ",
                description1: "Je développe des interfaces utilisateur",
                description2: "et des applications web",
                introduction: "Introduction",
                overview: "Aperçu" ,
                overviewDesc: "Je suis une développeuse informatique qualifiée avec une expérience en TypeScript et JavaScript, et une expertise dans des frameworks comme React, Node.js et Ruby on rails. J'apprends vite et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes du monde réel. Travaillons ensemble pour donner vie à vos idées !",
                technologies: "Technologies",
                technologiesDesc: "Les objets suivants indiquent les différents outils de développement logiciel avec lesquels j'ai eu le privilège de travailler tout au long de ma carrière. Ces expériences m'ont fourni une base solide en génie logiciel et m'ont permis de fournir des solutions de pointe à des clients dans divers secteurs.",
                work: "Mon travail",
                projects: "Projets",
                projectsDesc: "Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des référentiels de code et des démonstrations en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.",
                getInTouch: "Contactez-moi",
                contact: "Contact",
                yourName: "Votre nom",
                namePH: "Quel est votre nom?",
                yourEmail: "Votre email",
                emailPH: "Quel est votre e-mail?",
                yourMessage: "Votre message",
                messagePH: "Que voulez-vous dire?",
                sending: "Envoi...",
                send: "Envoyer",
            },
        },
        es:{
            translation:{
                greeting: "Hola, soy ",
                description1: "Desarrollo interfaces de usuario",
                description2: "y aplicaciones web",
                introduction: "Introducción",
                overview: "Resumen",
                overviewDesc: "Soy una desarrolladora de software con experiencia en TypeScript y JavaScript, y experiencia en frameworks como React, Node.js y Ruby on rails. Aprendo rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelvan problemas del mundo real. ¡Trabajemos juntos para dar vida a tus ideas!",
                technologies: "Tecnologías",
                technologiesDesc: "Los siguientes objetos indican las diversas herramientas de desarrollo de software con las que he tenido el privilegio de trabajar a lo largo de mi carrera. Estas experiencias me han proporcionado una base sólida en ingeniería de software y me han permitido ofrecer soluciones de vanguardia a clientes de diversas industrias.",
                work: "Mi trabajo",
                projects: "Proyectos",
                projectsDesc: "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo. Reflejan mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.",
                getInTouch: "Ponte en contacto",
                contact: "Contacto",
                yourName: "Su nombre",
                namePH: "¿Cuál es su nombre?",
                yourEmail: "Su correo",
                emailPH: "¿Cuál es su correo?",
                yourMessage: "Su mensaje",
                messagePH: "¿Qué quiere decir?",
                sending: "Enviando...",
                send: "Enviar",
            },
        },
    }
})

