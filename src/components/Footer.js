import React from 'react';
import fb from '../Assets/facebook (1).svg';
import whatsapp from '../Assets/whatsapp.svg';

export default function Footer() {
  return (
    <div id='contact'>
    <footer className="footer">
      <div className="footer-content">
        <div>
        <div className="footer-logo">🌵 Cactus </div>
            <p>Choose the best plants for your home.</p></div>
        
        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#services">Our Services</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>SOCIAL MEDIA</h4>
          <div className="social-icons">
            <a href="#facebook"><img src={fb} /></a>
            <a href="#whatsapp"><img src={whatsapp} /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}