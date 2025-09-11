import React from 'react';
import "./footer.css";

import Logo from "../../assets/nathans-dev.png"; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
             <img src={Logo} alt="nathans.dev" className="nav__footer-img" />

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
                    <a href="#testimonials" className="footer__link">
                        Testimonials
                    </a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/gioanathan.vargas.3/" 
               className="footer__social-link" 
               target='_blank'
            >
              <i class="bx bxl-slack"></i>
           </a>

           <a href="https://www.instagram.com/lilgio.nate/" 
              className="footer__social-link" 
              target='_blank'
           >
            <i class="bx bxl-linkedin"></i>
           </a>

           <a href="https://twitter.com/GioVargas20" 
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