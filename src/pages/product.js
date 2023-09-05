import React from 'react'
import Navbar from'../components/navbar/navbar';
import Footer from '../components/Footer/footer';
import Topnav from '../components/navbar/topnav'
import img from'../style/up-arrow.png'
import './product.css'

import ProductDetails from '../components/products'

function product() {
  return (
    <div>
      <Topnav/>
      <Navbar/>

      <div className="banner2">
            <div className="content2">
                <h1>PRODUCTS</h1><br/>
                <div id="bannerbtn2"><button>SHOP NOW</button></div>
            </div>
        </div>

      <ProductDetails/>
      
      <Footer/>
      <a href="#" class="arrow"><i><img src={img} alt="" width="50px"></img></i></a>
    </div>
  )
}

export default product
