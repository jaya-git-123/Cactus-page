import React from 'react';
import Contact from '../Assets/contact-cactus.png';

export default function ContactUs() {
  return (
    <div id='shop'>
    <section className="contact-us">
      <h2>YOU WANT A CACTUS CONTACT US</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Write to us</h3>
          <p>info@cactusstore.com</p>
          <h3>Call us at the numbers</h3>
          <p>+1 (555) 123-4567</p>
          <p>+11-012345</p>
          <h3>Find us here</h3>
          <p>Lima - Sun City - Peru</p>
          <p>Av.Moon #4321</p>
        </div>
        <div className="contact-image">
          <img src={Contact} alt="Contact Cactus" />
        </div>
      </div>
    </section>
    </div>
  );
}