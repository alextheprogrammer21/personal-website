import React from "react";

import "./Main.css";

export default function Main(props) {
  return (
    <div className="main">
      <h1 className="greeting">Hello, my name is</h1>
      <div className="name"> 
      <h2 className="full_name">Alex       
        <img className="stroke fade-in-main" src="personal-website/images/blue.png" alt=''></img>
      
      </h2>
      </div>

      <p className="info">I am a web developer.</p>
    </div>
  );
};