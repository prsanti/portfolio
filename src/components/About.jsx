import React from 'react';
import './About.scss';
import pic from "../photos/circle-profile.png";


export default function About() {
  // const profilePic = "../../public/circle-profile.png";
  return (
    <div className="about">
      <img src={pic} alt="profile-pic" id="profile-pic" />
      <div className="intro">
        <p className="hello">Paul Santiago</p><br/>
        <p className="title"><b>Full-stack Developer</b></p>
      </div>
      {/* <div className="title">
        <p>
          full-stack developer
        </p>
      </div> */}
      {/* <h1 className="full-name">
        <div className="first-name">Paul</div>
        <div className="last-name">Santiago</div>
      </h1> */}
      <div className="summary">
        <p>
          I am a full-stack developer looking for a position where I can learn and expand my skillset.<br/>
          I primarily code in <b>React</b>
        </p>
      </div>
    </div>
  );
}