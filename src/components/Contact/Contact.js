import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <ul>
        <li>
          <a href="mailto:alextheprogrammer21@gmail.com">
            <FontAwesomeIcon icon={['far', 'envelope']} className="icon"/> alextheprogrammer21@gmail.com
          </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/abhisetia/" target="_blank" className="link" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon"/> LinkedIn
          </a>
        </li>
        <li >
          <a href="https://github.com/alextheprogrammer21" target="_blank" rel='noopener noreferrer' className="link">
            <FontAwesomeIcon icon={['fab', 'github']} className="icon" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};