import React from 'react';
import './About.scss';
import pic from "../photos/circle-profile.png";

export default function About() {
  return (
    <div className="about">
      <img src={pic} alt="profile-pic" id="profile-pic" />
      <div className="intro">
        <p className="name"><b>Paul Santiago</b></p>
        <p className="title">Full-Stack Developer</p>
      </div>
      <div className="summary">
        <p>
          I am a full-stack developer looking for a position where I can learn and expand my skillset.
          My front-end languages include <b>Javascript</b>, <b>HTML</b>, and <b>CSS</b> where I use them together in the <b>React</b> Framework.
          When building projects, writing clear, modular code is an approach I try and stay true to by component testing through <b>Storybook</b>.
          For unit testing I have experience using <b>Jest</b> to ensure the core functionality of the program is working.
          In addition, I use <b>Cypress</b> in React, and <b>Capybara</b> in Rails for end-to-end testing to simulate and visualize what users will see when using an application.
        </p>
        <p>
          On the back-end side of my projects, I have experience coding in <b>Ruby on Rails</b> and understanding the flow of <b>MVC</b> (Model, View, Controller) frameworks.
          However, I primarily manage my server side development through <b>Node.js</b>, and <b>Express.js</b> .
          On the database side of the server, I have experience using <b>PostgreSQL</b> by managing my data and tables.
          And I am currently learning <b>GraphQL</b> to further my skillset within backend development.
        </p>
        <p>
          I am really looking forward to connect with you and start building amazing projects together.
          You can reach me through one of my socials at the top or email me directly at <a className="email" href="mailto:p.santiago796@gmail.com"><b>p.santiago796@gmail.com</b></a>
        </p>
        <p>
          In the meantime, you can <i>swipe</i> through some of my projects below. The Github repository can be found underneath as well.
        </p>
      </div>
    </div>
  );
}