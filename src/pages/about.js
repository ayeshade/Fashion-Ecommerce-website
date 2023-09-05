import React from 'react'
import Navbar from'../components/navbar/navbar';
import Footer from '../components/Footer/footer';
import Topnav from '../components/navbar/topnav';
import img from '../style/istockphoto-955641488-612x612.jpg';
import Offer from '../components/offer'
import img1 from'../style/up-arrow.png'
import '../App.css'
function about() {
  return (
    <div>
      <Topnav/>
      <Navbar/>
        <div className="container" id="about">
           {/* <center> <h1>ABOUT US</h1></center> */}
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-md-6 py-3 py-md-0">
                    <div className="card">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-6 py-3 py-md-0">
                  <h1>OUR STORY</h1>
                    <p>Welcome to Fashion, your ultimate destination for fashion-forward clothing and accessories. Established with a passion for style and a commitment to quality, we bring you a curated collection of the latest trends and timeless classics.We take pride in offering not only stylish attire but also a seamless shopping experience.<br></br> <br></br>Our user-friendly website lets you explore our catalog with ease, providing detailed product descriptions and sizing guides to help you make informed choices. Our dedicated customer support team is always ready to assist you, ensuring your shopping journey is smooth and enjoyable.<br></br><br></br></p>
                </div>
            </div>
        </div><br/>
  
      <Offer/>
      <Footer/>
      <a href="#" class="arrow"><i><img src={img1} alt="" width="50px"></img></i></a>
    </div>
  )
}

export default about
