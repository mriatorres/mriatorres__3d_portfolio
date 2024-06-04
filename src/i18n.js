import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Translation, initReactI18next } from 'react-i18next';

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
            },
        },
        fr:{
            translation:{
                greeting: "Salut, je suis ",
                description1: "Je développe des interfaces utilisateur",
                description2: "et des applications web",
                introduction: "Introduction",
                overview: "Aperçu" ,
                overviewDesc: "Je suis une développeuse informatique qualifiée avec une expérience en TypeScript et JavaScript, et une expertise dans des frameworks comme React, Node.js et Ruby on rails. J'apprends vite et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes du monde réel. Travaillons ensemble pour donner vie à vos idées !"

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


            },
        },
    }
})

