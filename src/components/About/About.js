import React from "react";

import "./About.css";


export default function About(props) {
  return (
    <div className="about">
      <div className='picture'>
        <img src="../../public/images/profile.jpeg" className="fade-in-about" alt='profile'></img>
      </div>

      <div className="about_me">
        <div className="about_text">
        <h2>About Me</h2>
        <p>Full stack web developer with a
background in accounting and finance
looking to bring a positive,
collaborative attitude to your team. I'd
love to help your organization meet
its development goals.</p>
        <h4>Technologies I've been working with: </h4>

        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>HTML & (S)CSS</li>
          <li>jQuery</li>
          <li>postgreSQL</li>
        </ul>
      </div>
    </div>
  </div>
  );
};