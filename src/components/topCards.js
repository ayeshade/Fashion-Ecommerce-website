import React from 'react';
import './topCard.css'
import img from '../style/navigation-image-camp_dae41ff0-3c3d-4cf9-a1ad-d77a842334a5.webp';
import img1 from '../style/hrw02342_1681557019-1357521997045.jpg'
import img2 from '../style/I5612_533x.webp';

const TopCards = () => {
    return (
        <div className="container" id="top-cards">
            <div className="row">
                <div className="col-md-5 py-3 py-md-0">
                    <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                        <img src={img} alt="" />
                        <div className="card-img-overlay">
                             <h5 className="card-titel">WOMANS</h5>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                        <img src={img1} alt="" />
                        <div className="card-img-overlay">
                             <h5 className="card-titel">GIRLS</h5>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card" style={{ backgroundColor: "#a9a9a926" }}>
                        <img src={img2} alt="" />
                        <div className="card-img-overlay">
                             <h5 className="card-titel">ACCESSORIES</h5>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
