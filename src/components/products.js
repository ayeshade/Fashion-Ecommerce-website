import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../data/card.json';
import './card.css';

function Products(props) {
  return (
    <>
      <div className="main">
        <h1><i>LATEST PRODUCTS</i></h1>
        <ul className="cards">
          {cards.products.map(item => (
            <li key={item.id} className="cards_item">
              <div className="card">
                <div className="card_image"><img src={item.imgSrc} height="250px" width="300px" /></div>
                <div className="card_content">
                  <h2 className="card_title">{item.title}</h2><br />
                  <center><Link to={`/product/${item.id}`} className="btn2 card_btn">ADD TO CART</Link></center>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
