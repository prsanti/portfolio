import React from 'react';
import './Header.scss';

import mail from "../photos/envelope-solid.svg";
import github from "../photos/github-brands.svg";
import instagram from "../photos/instagram-brands.svg";
import linkedin from "../photos/linkedin-in-brands.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>P S</h1>
      </div>
      <div className="nav--bar">
        <a href="https://github.com/prsanti">
          <img src={github} alt="github" className="nav--item"/>
        </a>
        <a href="https://www.linkedin.com/in/paulorsantiago/">
          <img src={linkedin} alt="linkedin" className="nav--item"/>
        </a>
        <a href="mailto:p.santiago796@gmail.com">
          <img src={mail} alt="mail" className="nav--item"/>
        </a>
        <a href="https://www.instagram.com/paulo_sntgo/">
          <img src={instagram} alt="instagram" className="nav--item"/>
        </a>
      </div>
    </header>
  );
}