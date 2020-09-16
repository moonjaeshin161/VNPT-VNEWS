import React from "react";
import './styles/MainCarousel.css'

const MainCarousel = ({ news }) => {
  return (
    <div id="myCarousel" className="carousel slide border" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      {
        console.log('News', news)
      }
      <div className="carousel-inner">
        {
          news && news.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img className="d-block w-100" src={item.img1} alt="Cat" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MainCarousel;
