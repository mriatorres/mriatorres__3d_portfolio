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

            },
        },
        fr:{
            translation:{
                greeting: "Salut, je suis ",
                description1: "Je développe des interfaces utilisateur",
                description2: "et des applications web",

            },
        },
        es:{
            translation:{
                greeting: "Hola, soy ",
                description1: "Desarrollo interfaces de usuario",
                description2: "y aplicaciones web",

            },
        },
    }
})

