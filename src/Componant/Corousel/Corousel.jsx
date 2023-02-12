import React from 'react';
import './Corousel.css';

const Corousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="http://res.cloudinary.com/doh91aq3h/image/upload/v1676108355/mzvkrladnvihyxvb2ghb.png" className="d-block w-100" alt=" " />
            </div>
            <div className="carousel-item">
              <img src="http://res.cloudinary.com/doh91aq3h/image/upload/v1676107842/mihpqpytlbrej9iapsgj.png" className="d-block w-100" alt=" " />
            </div>
            <div className="carousel-item">
              <img src="https://avatars.mds.yandex.net/i?id=73fd45bbecf1dbfd5b06b3e85925878e-6343405-images-thumbs&n=13&exp=1" className="d-block w-100" alt=" " />
            </div>
            <div className="carousel-item">
              <img src="https://avatars.mds.yandex.net/i?id=73fd45bbecf1dbfd5b06b3e85925878e-6343405-images-thumbs&n=13&exp=1" className="d-block w-100" alt=" " />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  )
}

export default Corousel