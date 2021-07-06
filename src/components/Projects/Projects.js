import React from 'react';
import "./Projects.css";
import Project from "./Project"

export default function Projects(props) {

  return (
    <div className="projects"> 
      <h1>Projects</h1>
      <div className="row">
      <div className="column">
          <Project 
            image={["personal-website/images/shin-herb/1.png", "personal-website/images/shin-herb/2.png", "personal-website/images/shin-herb/3.png", "personal-website/images/shin-herb/4.png"]}
            image_alt="screenshot of shinrinyoku herb ecommerce app"
            title="Shinrinyoku Herb"
            description="Shin herb is a fully functioning e-commerce site with a built in test card for purchases."
            stack={['React', 'Redux', 'Firebase', 'Stripe']}
            link='https://github.com/alextheprogrammer21/Shinrinyoku-Herb'
          />
        </div>
        <div className="column">
          <Project 
            image={["personal-website/images/schedular/1.png", "personal-website/images/schedular/2.png", "personal-website/images/schedular/3.png"]}
            image_alt="screenshot of schedular app"
            title="Interview Schedular"
            description="A scheduler that allows users to set up, edit, or delete appointments. Made with React."
            stack={['React', 'Node', 'Express', 'Jest', 'Storybook', 'Cypress']}
            link='https://github.com/alextheprogrammer21/Interview-Scheduler'
          />
        </div>
      </div>

      <div className="row">
      <div className="column">
          <Project 
            image={["personal-website/images/food-pickup/food_main.png", "personal-website/images/food-pickup/food-pickup.png", "personal-website/images/food-pickup/food_rest_time.png", "personal-website/images/food-pickup/food_cust_time.png"]}
            image_alt="screenshot of food pick-up app"
            title="Food Pick-up"
            description="A food ordering pick up application for a single restaurant that was built using AJAX. Twilio API is used to send text messages to the restaurant to confirm orders. Customers get text messages for order updates."
            stack={['Node', 'Express', 'JQuery', 'Twilio', 'PostgreSQL']}
            link='https://github.com/alextheprogrammer21/food-pickup'
          />
        </div>
        <div className="column">
          <Project 
            image={["personal-website/images/travel/1.png", "personal-website/images/travel/2.png", "personal-website/images/travel/3.png", "personal-website/images/travel/4.png", "personal-website/images/travel/5.png", "personal-website/images/travel/6.png"]}
            image_alt="screenshot of travel booking app"
            title="Travel Booking"
            description="A travel website that lets users book flights. A nicer looking Expedia with personalization!"
            stack={['React', 'Material-UI', 'Node', 'Express']}
            link='https://github.com/alextheprogrammer21/team-kim-possible'
          />
        </div>
        </div>
    </div>        

  )
}