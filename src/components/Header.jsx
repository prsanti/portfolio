import React from 'react';
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>P S</h1>
      </div>
      <div className="nav--bar">
        <h2 className="nav--item">
          About
        </h2>
        <h2 className="nav--item">
          Projects
        </h2>
        <h2 className="nav--item">
          Connect
        </h2>
      </div>
    </header>
  );
}