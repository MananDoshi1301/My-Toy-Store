import React from 'react';

import toy1 from "./toy11.jpg";
import toy2 from "./toy14.jpg";
import toy3 from "./toy13.jpg";

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className={`carousel carousel-dark slide`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={toy1} className={`d-block w-100`} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={toy2} className={`d-block w-100`} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={toy3} className={`d-block w-100`} alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
