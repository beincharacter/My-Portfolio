import React from 'react';
import './Corousel.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = () => {
  return (
    <>
      <Carousel autoPlay>
        <div>
          <img alt="" src="http://res.cloudinary.com/doh91aq3h/image/upload/v1676351644/nyzmmoghicqk5g5fdwci.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        {/* <div>
          <img alt="" src="https://hdpic.club/uploads/posts/2022-08/thumbs/1660581386_6-hdpic-club-p-kayak-8.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img alt="" src="https://hdpic.club/uploads/posts/2022-08/thumbs/1660581386_6-hdpic-club-p-kayak-8.jpg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </>
  )
}

export default CarouselContainer