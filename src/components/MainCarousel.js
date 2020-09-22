import React from "react";
import { Link } from "react-router-dom";
import './styles/MainCarousel.css';

const MainCarousel = ({ news }) => {
  return (

    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ marginBottom: 10, position: 'relative' }}>

      <ol className="carousel-indicators" style={{ position: 'absolute', bottom: 80 }}>
        {
          news && news.map((item, index) => (
            <li data-target="#myCarousel" data-slide-to={index} className={(index === 0) ? 'active' : ''} key={index}></li>
          )
          )
        }
      </ol>
      <div className="carousel-inner">
        {
          news && news.map((item, index) => (

            <Link
              to={`/news/news/${item.newsId}`}
              className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} style={{ position: 'relative', marginBottom: 90 }}>
              <img className="d-block w-100" src={item.img1} alt="2" />
              <div className="carousel-title" style={{ position: 'absolute' }}>{item.title}</div>

            </Link>
          )
          )
        }
      </div>

    </div>
  );
};

export default MainCarousel;
