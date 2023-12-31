import React from 'react'
import Navbar from'../components/navbar/navbar';
import Footer from '../components/Footer/footer';
import img from'../style/up-arrow.png'
import Topnav from '../components/navbar/topnav';
import '../App.css'
function contact() {
  return (
    <div>
      <Topnav/>
      <Navbar/>
      <div className="banner2">
            <div className="content2">
                <h1>CONTACT US</h1>
          
            </div>
        </div>

        <section id="section-wrapper">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">Contact Information</h2>
                    <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="info-details">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span>Phone:</span> <a href="tel:+1235235598">+1235235598</a>
                        </li>
                        <li>
                            <i className="fas fa-paper-plane"></i>
                            <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <span>Website:</span> <a href="#">yoursite.com</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="form-wrap">
                    <form action="#" method="POST">
                        <h2 className="form-title">Send us a message</h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input type="text" className="fname" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="lname" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="email" placeholder="Mail" />
                            </div>
                            <div className="form-group">
                                <input type="number" className="phone" placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="" placeholder="Write your message"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Send Message" className="submit-button" />
                    </form>
                </div>
            </div>
        </section> 
          
 

      <Footer/>
      <a href="#" class="arrow"><i><img src={img} alt="" width="50px"/></i></a>
    </div>
  )
}

export default contact
