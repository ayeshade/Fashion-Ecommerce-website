import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import cards from '../data/card.json';
import Navbar from './navbar/navbar';
import '../App.css';
import Quantity from './quantity'
import Topnav from './navbar/topnav';
import Footer from './Footer/footer';


function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = cards.products.find(item => item.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
    <Topnav/>
    <Navbar/>
    <div className="product-details">
      
      <div className="container-1">
        <div className="left-container">
          <div className="card_image">
            <img src={product.imgSrc} alt={product.title} height="500px" width="400px" />
          
          </div>
        </div>
        <div className="right-container">
          <div className="card_content">
            <h2 className="card_title">{product.title}</h2><br/>
            <h4 className="card_prize">RS.{product.prize}</h4>
            <div className="star">
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                </div><br/>
              <h3 className='Detail'>Details</h3>
            <h6 className="card_description"><h4>Shirt:</h4>{product.description}</h6>
            <h6 className="card_Ddetails"><h4>Dupatta:</h4>{product.Ddetails}</h6>
            <h6 className="card_Tdetails"><h4>Trouser:</h4>{product.Tdetail}</h6>
           <h4>Quantity:<Quantity/></h4> 
             
            <Link to="/product" className="btn card_btn">Checkout</Link> {/* Corrected the Link */}
            {/* Add more product details here */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProductDetails;
