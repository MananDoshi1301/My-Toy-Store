import React from 'react';

import toy1 from "./toy11.jpg";
import toy2 from "./toy14.jpg";
import toy3 from "./toy13.jpg";

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" class={`carousel carousel-dark slide`} data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={toy1} class={`d-block w-100`} alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={toy2} class={`d-block w-100`} alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={toy3} class={`d-block w-100`} alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
