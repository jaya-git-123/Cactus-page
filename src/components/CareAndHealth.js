import React from 'react';
import Care from '../Assets/care-cactus.png';

export default function CareAndHealth() {
  return (
    <div id='care'>
    <section className="care-and-health">
      <h2>CARE AND HEALTH FOR YOUR CACTUS</h2>
      <div className="care-content">
        <div className="care-image">
          <img src={Care} alt="Cactus Care" />
        </div>
        <ul className="care-tips">
          <li>In cold times, add water once a month and during the summer do it when the soil is very dry.</li>
          <li>Have good drainage so that the cactus does not accumulate water.</li>
          <li>Place your cactus or succulent in a location with indirect light.</li>
          <li>Do not water more that necessary, as it can accumulate too much water and the plant will rot.</li>
          <li>Do not expose to high temperatures, as succulent plants are not fans of extremes.</li>
        </ul>
      </div>
    </section>
    </div>
  );
}