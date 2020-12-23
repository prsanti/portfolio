import React from 'react';
// import './Application.scss'
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Card from "./Card.jsx";

export default function Application() {
  return (
    <main className="layout">
      <Header/>
      <About/>
      <div id="projects">
        <Projects/>
      </div>
      {/* <div id="card">
        <Card/>
      </div> */}
    </main>
  );
}