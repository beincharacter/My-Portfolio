import React from 'react';
import './Corousel.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = () => {
  return (
    <>
      <Carousel autoPlay>
        <div>
          <img alt="" src="https://cdn.kimkim.com/files/a/images/7809628c0617a9900ba19d2a472b546ecba3db8f/big-7148f7bcbba908faf4014877e69bab2f.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img alt="" src="https://cdn.kimkim.com/files/a/images/7809628c0617a9900ba19d2a472b546ecba3db8f/big-7148f7bcbba908faf4014877e69bab2f.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img alt="" src="https://cdn.kimkim.com/files/a/images/7809628c0617a9900ba19d2a472b546ecba3db8f/big-7148f7bcbba908faf4014877e69bab2f.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </>
  )
}

export default CarouselContainer