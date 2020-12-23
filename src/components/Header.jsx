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
        <img src={github} alt="github" className="nav--item" />
        <img src={linkedin} alt="linkedin" className="nav--item" />
        <img src={mail} alt="mail" className="nav--item" />
        <img src={instagram} alt="instagram" className="nav--item" />
        {/* <h3 className="nav--item">
          About
        </h3>
        <h3 className="nav--item">
          Projects
        </h3>
        <h3 className="nav--item">
          Connect
        </h3> */}
      </div>
    </header>
  );
}