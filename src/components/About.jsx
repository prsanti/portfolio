import React from 'react';
import './About.scss';
import pic from "../photos/circle-profile.png";


export default function About() {
  // const profilePic = "../../public/circle-profile.png";
  return (
    <div className="about">
      <img src={pic} alt="profile-pic" id="profile-pic" />
      <div className="intro">
        <p className="hello">Hey, I'm <b>Paul Santiago</b>
          {/* <div className="full-name">Paul Santiago</div> */}
        </p>
      </div>
      {/* <h1 className="full-name">
        <div className="first-name">Paul</div>
        <div className="last-name">Santiago</div>
      </h1> */}
      <div className="summary">
        <p>
          Hello world
        </p>
      </div>
    </div>
  );
}