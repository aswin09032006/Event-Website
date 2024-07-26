import React from 'react';
import image from "../../assets/contact.jpg";
import './contact.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="image-container">
        <img src={image} alt="Running" />
      </div>
      <div className="form-container">
        <h2>Get in Touch</h2>
        <h3>RUN WITH US</h3>
        <p>Reach out and we'll get in touch within 24 hours.</p>
        <form>
          <div className="input-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-row">
            <input type="tel" placeholder="Telephone" />
            <input type="number" placeholder="Age" />
          </div>
          <textarea placeholder="Message..."></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;