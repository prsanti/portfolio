import React from 'react';
import './About.scss';
import pic from "../photos/circle-profile.png";

export default function About() {
  return (
    <div className="about">
      <img src={pic} alt="profile-pic" id="profile-pic" />
      <div className="intro">
        <p className="hello"><b>Paul Santiago</b></p>
        <p className="title">Full-Stack Developer</p>
      </div>
      <div className="summary">
        <p>
          I am a full-stack developer looking for a position where I can learn and expand my skillset.
          My front-end languages include <b>Javascript</b>, <b>HTML</b>, and <b>CSS</b> where I use them together in the <b>React</b> Framework.
          Writing clear, and modular code is an approach I try and stay true to.
        </p>
        <p>
          On the back-end side of my projects, I have experience coding in <b>Ruby on Rails</b>, and managing servers and files through <b>Node.js</b>.
          I can navigate databases with <b>PostgreSQL</b>, and use <b>R</b> or <b>Stata</b> to visualize the data.
        </p>
        <p>
          I am really looking forward to connect with you and start building amazing projects together. You can check out some of my projects here.
        </p>
      </div>
    </div>
  );
}