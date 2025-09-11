import React from 'react';
import "./footer.css";

import Logo from "../../assets/nathans-dev.png"; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <a href="#home">
                <img src={Logo} alt="nathans.dev" className="nav__footer-img" />
            </a>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                        About
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#services" className="footer__link">
                        Services
                    </a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://newworkspace-qrf1337.slack.com/team/U05S6SLD42H" 
               className="footer__social-link" 
               target='_blank'
            >
              <i class="bx bxl-slack"></i>
           </a>

           <a href="https://www.linkedin.com/in/gionathan-vargas-302306195/" 
              className="footer__social-link" 
              target='_blank'
           >
            <i class="bx bxl-linkedin"></i>
           </a>

           <a href="https://github.com/lilgionate" 
              className="footer__social-link" 
              target='_blank'
            >
            <i class="bx bxl-github"></i>
        </a>
            </div>

            <span className="footer__copy">
                &#169; Desinged By nathans.dev. All rights reserved
                </span>
        </div>
    </footer>
  )
}

export default Footer