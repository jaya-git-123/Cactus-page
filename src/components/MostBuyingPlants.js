import React from 'react';
import shop1 from '../Assets/shop-cactus-1.png';
import shop2 from '../Assets/shop-cactus-2.png';
import shop3 from '../Assets/shop-cactus-3.png';
import shop4 from '../Assets/shop-cactus-4.png';
import shop5 from '../Assets/shop-cactus-5.png';

export default function MostBuyingPlants() {
  const plants = [
    { name: 'Gymnocalycium cactus', price: 15, image: shop1 },
    { name: 'Echeveria Succulent', price: 10, image: shop2 },
    { name: 'Ferocactus Cactus', price: 15, image: shop3 }, 
    { name: 'Key Lime Pie Succulent', price: 10, image: shop4 },
    { name: 'Melocactus Cactus', price: 15, image: shop5 },
  ];

  return (
    <section className="most-buying-plants">
      <h2>THE BEST PLANTS</h2>
      <div className="plant-grid">
        {plants.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button className="add-to-cart">🛒</button>
          </div>
        ))}
      </div>
    </section>
  );
}