import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../Assets/images/icons8-k-67.png'
import LogoSubtitle from '../../Assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMailReply, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar' > 
        <Link className='logo' to='/'> 
            <img src={LogoS} alt = "logo" className='main-logo'/>
            <img className= "sub-logo" src={LogoSubtitle} alt = "slobodan" />
        </Link>
        <nav>
            <NavLink 
                exact="true" // only activates when the web address is the home page
                activeclassname="active" 
                to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                exact="true" //only activates when the web address is the /about page
                activeclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                exact="true" //only activates when the web address is /contact
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank" // makes sure that the person opening the link doesnt leave my page
                    rel = "noreferrer"
                    href='https://www.linkedin.com/in/kevin-calle-76a650197/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" ></FontAwesomeIcon>

                </a>
            </li>
            
            <li>
                <a
                    target="_blank"
                    rel = "noreferrer"
                    href='https://github.com/kcalle012'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" ></FontAwesomeIcon>

                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel = "noreferrer"
                    href='mailto:kcalle012@gmail.com'
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" ></FontAwesomeIcon>

                </a>
            </li>
        </ul>
        
    </div>
) 

export default Sidebar;
