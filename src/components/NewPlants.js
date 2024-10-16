import React from 'react';
import img1 from '../Assets/new-cactus-1.png';
import img2 from '../Assets/new-cactus-2.png';
import img3 from '../Assets/new-cactus-3.png';


export default function NewPlants() {
  const plants = [
    { name: 'Gymnocalycium Cactus', image: img1 },
    { name: 'Lily Pad Succulent', image: img2 },
    { name: 'Nebula Cactus', image: img3 },
  ];

  return (
    <div id='news'>
    <section className="new-plants">
        <div>
      <h2>New Plants for Your Home</h2>
      <p>Select new ornamental plants for home decoration and obtain an atmosphere of harmony and freshness.</p></div>
      <div className="plant-grid">
        {plants.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <p>{plant.name}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}