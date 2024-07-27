import React from 'react';
import img1 from '../../assets/ABOUT US/img1.png';
import img2 from '../../assets/ABOUT US/img2.png';
import img3 from '../../assets/ABOUT US/img3.png';
import img4 from '../../assets/ABOUT US/img4.png';
import img5 from '../../assets/FEEDING BELLIES/img4.png';
import img6 from '../../assets/JOY OF GIVING/img4.png';
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
              <img src={img1}alt="" />
              <img src={img2}alt="" />
              <img src={img3}alt="" />
              <img src={img4}alt="" />
              <img src={img5}alt="" />
              <img src={img6}alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;