import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'; 

function topnav() {
  return (
     <>
      <div class="top-navbar">
      <div class="top-icons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
      </div>
     
      <div class="other-links">
     <button id="btn-login"> <a href="#">Login</a></button>
     <button id="btn-signup"><a href="#">Sign up</a></button>

          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
      </div>
  </div>
  </>
  )
};

export default topnav;
