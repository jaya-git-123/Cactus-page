import React from 'react';
import Homeimg from '../Assets/home-cactus.png';

const Hero = () => {
  return (
    <div id='home'>
    <section className="hero">
        <div className="hero-image">
        <img src={Homeimg} alt="Smiling Cactus" height={500} width={400}/>
      </div>

      <div className="hero-content">
        <h1>ORNAMENTAL PLANTS FOR YOUR HOME</h1>
        <p>We design ornamental pllants for your home in-house for an original style and quality you won't find anywhere else.</p>
        <button className="cta-button">GO TO SHOP</button>
        <a href='#' className='link'>MORE DETAILS</a>
      </div>  
    </section>
    </div>
  );
};

export default Hero;

// import React from 'react'

// const Hero = () => {
//   return (
//     <div>Hero</div>
//   )
// }

// export default Hero