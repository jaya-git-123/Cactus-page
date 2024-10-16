// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewPlants from './components/NewPlants';
import MostBuyingPlants from './components/MostBuyingPlants';
import CareAndHealth from './components/CareAndHealth';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NewPlants />
      <MostBuyingPlants />
      <CareAndHealth />
      <ContactUs />
      <Footer />
    </div>
  );
}
