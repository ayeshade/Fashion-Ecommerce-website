import React from 'react';
import '../App.css'

const Offer = () => {
    return (
        <div className="container" id="offer">
            <div className="row">
                <div className="col-md-4 py-3 py-md-0">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h5>Free Shipping</h5>
                    <h6>On order over $100</h6>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <i className="fa-solid fa-truck"></i>
                    <h5>Fast Delivery</h5>
                    <h6>Worldwide</h6>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <i className="fa-solid fa-thumbs-up"></i>
                    <h5>Big Choice</h5>
                    <h6>Of products</h6>
                </div>
            </div>
        </div>
    );
};

export default Offer;
