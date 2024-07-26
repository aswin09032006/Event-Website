import React from 'react';
import placeholder from '../../assets/placeholder.png';
import "./about.css";

const About = () => {
  return (
    <div className='about-container'>
        {/* <div className="about-container-header">
            <h1>About us</h1>
        </div> */}
        <div className="about-content">
            <h1 id='Unit_Prabhat'> About Unit Prabhat:</h1>
            <p>Unit Prabhat is one of the units among 25 units under the aegis of youth affairs and division of student welfare wing is a one of the active and well-known unit. Unit Prabhat mainly focuses on the growth of society and for that we are working on into many projects like Nari, Plantation drive, Gyandeep, Feeding bellies, Joy of giving and some more. We also do events like Run for Equality, Rivals on the pitch, Smash it! and more. Each event promotes a social cause, so we are working for the betterment of the community.</p>

			<h1 id='motto'>“NOT ME, NOT YOU, BUT WE”</h1>
        </div>
        <div className="about-gallery-container">
            <h1 >~ Gallery</h1>
            <div className="about-gallery">
              <img src={placeholder}alt="" />
              <img src={placeholder}alt="" />
              <img src={placeholder}alt="" />
              <img src={placeholder}alt="" />
              <img src={placeholder}alt="" />
              <img src={placeholder}alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;