import React from "react";


const languages = [
    {code: 'en', lang: 'English'},
    {code: 'fr', lang: 'French'},
    {code: 'es', lang: 'Español'},
];


const changeLanguage = () => {

}

const LanguageSelector = () => {
    return (
        <div className="btn-container">
            {languages.map((lng) => {
                return <button key={lng.code} onClick={()=>changeLanguage()}> 
                    {lng.lang}
                </button>;
            })}

        </div>
    )
};

export default LanguageSelector;