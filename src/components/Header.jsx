import CoverImage from '../images/aaa.jpg';
import ProfileImage from '../images/bbb.png';

import { FaTwitter, FaGithub } from 'react-icons/fa';


export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        <h1 className="title-text">sekine atsuya</h1>
                        <h3 className="title-text">エンジニア</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://twitter.com/">
                                    <FaTwitter color="white" size="2em" />
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/">
                                    <FaGithub color="white" size="2em" />
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </header>
        
        );
};