import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" style={{ marginTop: '50px' }}>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-content">
              <h2>Fashion</h2>
              <h6>"Explore Your Style with our Fashion E-Commerce Collection!"</h6><br/>
              <h6>
                Karcahi <br />
                Sindh <br />
                Pakistan <br />
              </h6><br/>
              <strong><i className="fas fa-phone"></i> Phone: <strong>+000000000000000</strong></strong><br />
              <strong><i className="fa-solid fa-envelope"></i> Email: <strong>Fashion@gmail.com</strong></strong>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
               
               <a to="index.html">Home</a><br/>
                <a to="about.html">About</a><br/>
                <a to="contact.html">Contact</a><br/>
                <a to="#">products</a><br/>
                <a to="#">Privacy policy</a>
               
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <h6>Welcome to Fashion, your ultimate<br/> destination for fashion-forward <br/>clothing and accessories.</h6><br/>
              <ul>
                <a to="#">WOMANS CLOTHING</a><br/>
                <a to="#">GIRLS</a><br/>
                <a to="#">ACCESSORIES</a><br/>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Network</h4>
              <h6>"Get Styled. Stay Connected. Join Us on Social Media!"</h6><br/>
              <div className="socail-links mt-3">
                <Link to="#" className="twiiter"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="#" className="twiiter"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to="#" className="twiiter"><i className="fa-brands fa-google-plus"></i></Link>
                <Link to="#" className="twiiter"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="#" className="twiiter"><i className="fa-brands fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </footer>
  );
};

export default Footer;
