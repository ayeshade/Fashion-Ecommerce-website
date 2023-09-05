import React from 'react'
import './home.css';
import img from './a.jpg';
function homesection() {
  return (
    <>
    <section class="home">
    <div class="content">
        <h3>Biggest Clothe Sale
            <br></br> <span>Up To 50% Off</span>
        </h3>
        <h3>NEW ARRIVALS</h3>
        <button id="shopnow">Shop Now</button>
    </div>
    <div class="img">
        <img src={img} alt=""></img>
    </div>
</section>
</>
  )
}

export default homesection
