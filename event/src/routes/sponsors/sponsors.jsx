import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import rfe from '../../assets/rfe.png';
import CardCarousel from '../../components/cardcarousel/cardcarousel';
import ScrollingCards from '../../components/scrollingcards/scrollingcards';
import './sponsors.css';

const Sponsors = () => {
  return (
    <div className='sponsor-container'>
      <h1 className="sponsor-benefits">
        Benefits for our sponsors
      </h1>
      <CardCarousel/>
      <p className="more-benefit-details">
        Contact us for more details{' '}
        <a href="/contact" style={{ textDecoration: 'none' }}>
        <FiArrowUpRight style={{ color: '#ff4500' }} />
        </a>
      </p>
      <div className="sponsor-benefits-container">
        <div className="sponsor-benefit-left-side">
          <div className="sponsor-benefit-title">
            <h2><span style={{fontSize:"45px",fontStyle:"italic",color:"white"}}>01. </span>Brand Exposure</h2>
            <hr />
            <p className="sponsor-benefit-description">
            Logo on promotional materials, event banners, Tshirts, and website
            </p>
          </div>
          <div className="sponsor-benefit-title">
            <h2><span style={{fontSize:"45px",fontStyle:"italic",color:"white"}}>02. </span>Corporate Sustainability</h2>
            <hr />
            <p className="sponsor-benefit-description">
            Position your brand as a supporter of gender equality and community wellness
            </p>
          </div>
        </div>
        <img src={rfe} alt="" className="sponsor-benefit-image" />
        <div className="sponsor-benefit-right-side">
          <div className="sponsor-benefit-title">
            <h2><span style={{fontSize:"45px",fontStyle:"italic",color:"white"}}>03. </span>Community Engagement</h2>
            <hr />
            <p className="sponsor-benefit-description">
            Direct engagement with the local community and participants.
            </p>
          </div>
          <div className="sponsor-benefit-title">
            <h2><span style={{fontSize:"45px",fontStyle:"italic",color:"white"}}>04. </span>Brand reach</h2>
            <hr />
            <p className="sponsor-benefit-description">
            One of the biggest university is Lovely professional university with diverse culture
            </p>
          </div>
        </div>
      </div>
      <ScrollingCards/>
      
    </div>
  )
}

export default Sponsors;
