import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🌵 Cactus</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#care">Care</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="icons">
        <span className="search-icon">🔍</span>
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
}
