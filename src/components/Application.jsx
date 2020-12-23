import React from 'react';
// import './Application.scss'
import { render } from 'react-dom'
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

export default function Application() {
  return (
    <main className="layout">
      <Header/>
      <About/>
      <p>testing</p>
      <Projects/>
    </main>
  );
}