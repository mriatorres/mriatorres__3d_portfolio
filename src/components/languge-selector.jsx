import React from "react";
import { useTranslation } from "react-i18next";


const languages = [
    {code: 'en', lang: 'EN'},
    {code: 'fr', lang: 'FR'},
    {code: 'es', lang: 'ES'},
];




const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    
    }

    
    return (
        <div className=" text-secondary font-medium">
            {languages.map((lng) => {
                return <button className= {`${lng.code === i18n.language?"selected":""} mr-5 hover:text-white text-[18px] sm:text-[14px] cursor-pointer`} 
                key={lng.code} 
                onClick={() => changeLanguage(lng.code)}> 
                    {lng.lang}
                </button>;
            })}

        </div>
    )
};

export default LanguageSelector;