import React from 'react';
import './Header.scss';

import mail from "../photos/envelope-regular.png";
import github from "../photos/github-brands.png";
// import instagram from "../photos/instagram-brands.png";
import linkedin from "../photos/linkedin-in-brands.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>P S</h1>
      </div>
      <div className="nav--bar">
        <a href="https://github.com/prsanti" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="nav--item"/>
        </a>
        <a href="https://www.linkedin.com/in/paulorsantiago/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className="nav--item"/>
        </a>
        <a href="mailto:p.santiago796@gmail.com">
          <img src={mail} alt="mail" className="nav--item mail"/>
        </a>
        
        {/* <a href="https://www.instagram.com/paulo_sntgo/" target="_blank">
          <img src={instagram} alt="instagram" className="nav--item"/>
        </a> */}
      </div>
    </header>
  );
}