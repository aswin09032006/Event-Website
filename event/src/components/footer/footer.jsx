import { IonIcon } from '@ionic/react';
import { logoInstagram, logoLinkedin } from 'ionicons/icons';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/company/lpunss/">
            <IonIcon icon={logoLinkedin} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com/unit_prabhat">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="/about">About</a></li>
        <li className="menu__item"><a className="menu__link" href="/sponsors">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>
      </ul>
      <p>&copy;2024 Run for Equality | LPUNSS</p>
    </footer>
  );
}

export default Footer;
