import React from 'react';
import { Link } from 'react-router-dom'; 
import './productCard.css'
import img1 from '../style/0SPFEFS23V34_6.webp'
import img2 from '../style/0SPEEST23V38_2.webp'
import img3 from '../style/0U3PEST23V58_2.webp'
import img4 from '../style/WESTDNM00608_1.webp'
import img5 from '../style/00002261GK8A_2.webp'
import img6 from '../style/0002382GKSC2_2.webp'
import img7 from '../style/WESTSCF01401_1.webp'
import img8 from '../style/WESTSCF01405_2.webp'

const ProductCard = () => {
    return (
        <div className="container" id="product-cards">
            <h1 className="text-center">COLLECTION</h1>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img2} alt="" />
                        <div className="card-body">
                            <h5>UNSTITCHED</h5>
                        </div>
                    </div>
                </div>
             
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img1} alt="" />
                        <div className="card-body">
                            <h5>Ready To Ware</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img3} alt="" />
                        <div className="card-body">
                            <h5>STITCHED</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img4} alt="" />
                        <div className="card-body">
                            <h5>JEANS</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: '30px' }}>
               
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img6} alt="" />
                        <div className="card-body">
                            <h5>Girls</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img5} alt="" />
                        <div className="card-body">
                            <h5>KURTAS</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img7} alt="" />
                        <div className="card-body">
                            <h5>ACCESSORIES</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src={img8} alt="" />
                        <div className="card-body">
                            <h5>ACCESSORIES</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/product" id="viewmorebtn">View More</Link>
        </div>
    );
}

export default ProductCard;
