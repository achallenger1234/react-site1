import { useEffect, userState } from 'react';
import axios from 'axios';


export const Skills = () => {
    
    const [languageList, setLanguageList] = userState(null);
    useEffect(() => {
        axios.get('https://api.github.com/users/achallenger1234/repos')
        .then((response) => {
            const languageList = response.data.map(res => res.language);
            const countedLanguageList = generateLaunguageCountObj(languageList);
            setLanguageList(countedLanguageList)
        })
    }, []);
    
    const generateLaunguageCountObj = (allLanguageList) => {
        const notNullLanguageList = allLanguageList.filter(language => language != null);
        const uniqueLanguageList = [...new Set(notNullLanguageList)];
        
        return uniqueLanguageList.map(item => {
            return {
                language: item,
                count: allLanguageList.filter(language => language === item).length
            }
        })

    }
    
    return(
        <div id="skills">
            <div className="container">
                <div className="heading">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                
                </div>
            </div>
        </div>
        );    
};
