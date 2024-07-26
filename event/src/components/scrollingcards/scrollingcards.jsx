import React from 'react';
import decathlon from '../../assets/sponsor-logos/decathlonlogo.png';
import gatorade from '../../assets/sponsor-logos/gatoradelogo.png';
import livn from '../../assets/sponsor-logos/livn.png';
import who from '../../assets/sponsor-logos/whologo.png';
import './scrollingcards.css';

const ScrollingCards = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={decathlon} alt="Decathlon" />
        <img src={gatorade} alt="Gatorade" />
        <img src={livn} alt="Livn" />
        <img src={who} alt="WHO" />
        <img src={decathlon} alt="Decathlon" />
        <img src={gatorade} alt="Gatorade" />
        <img src={livn} alt="Livn" />
        <img src={who} alt="WHO" />
      </div>
      <div className="logos-slide">
        <img src={decathlon} alt="Decathlon" />
        <img src={gatorade} alt="Gatorade" />
        <img src={livn} alt="Livn" />
        <img src={who} alt="WHO" />
        <img src={decathlon} alt="Decathlon" />
        <img src={gatorade} alt="Gatorade" />
        <img src={livn} alt="Livn" />
        <img src={who} alt="WHO" />
      </div>
    </div>
  );
}

export default ScrollingCards;
