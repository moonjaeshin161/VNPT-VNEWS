import React from "react";
import { Row, Col } from "react-bootstrap";

import { CONST } from "../const";

import Title from "../components/Title";
import MainCarousel from "../components/MainCarousel";
import VerticalNews from "../components/VerticalNews";
import HorizontalNews from "../components/HorizontalNews";

const Homepage = (props) => {

  const {
    trendingNews,
    latestNews,
    socialNews,
    economicNews,
    lifestyleNews,
    videoNews,
    imageNews,
    worldNews,
    leisureNews,
    sportNews,
    healthNews,
    techNews,
    confideNews,
    carNews,
    educationNews,
    superInfoNews } = props;

  return (
    <>
      <Row className="main-content">
        <Col lg={8}>
          <MainCarousel />

          <Row>
            <Row className='align-items-center mb-2'>
              <div style={{ fontSize: 20, color: CONST.color.blue, }} className='font-weight-bold'>Xu hướng</div>
            </Row>
          </Row>
          {
            trendingNews && trendingNews.map((item, index) => (
              <HorizontalNews item={item} key={index} />
            ))
          }

          <Row>
            <Title title='Mới nhất' />
          </Row>
          {
            latestNews && latestNews.map((item, index) => (
              <HorizontalNews item={item} key={index} />
            ))
          }

          <Row>
            <Title title='Xã hội' />
          </Row>
          {
            socialNews && socialNews.map((item, index) => (
              <HorizontalNews item={item} key={index} />
            ))
          }

          <Row>
            <Title title='Kinh tế' />
          </Row>
          {
            economicNews && economicNews.map((item, index) => (
              <HorizontalNews item={item} key={index} />
            ))
          }

          <Row>
            <Title title='Đời sống' />
          </Row>
          {
            lifestyleNews && lifestyleNews.map((item, index) => (
              <HorizontalNews item={item} key={index} />
            ))
          }



        </Col>
        <Col lg={4}>
          <section>
            <Title title='Tin video' />
            {
              videoNews && videoNews.map((item, index) => (
                <VerticalNews item={item} key={index} />
              ))
            }
          </section>

          <section>
            <Title title="Tin Ảnh" />
            {
              imageNews && imageNews.map((item, index) => (
                <img src={item.img1} key={index} width='300' height='200' alt='news' />
              ))
            }
          </section>

          <section>
            <Title title="Tin Audio" />
          </section>
        </Col>
      </Row>

      <Row>

        <Col>
          <Title title='Thế giới' />
          {
            worldNews && worldNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='Giải trí' />
          {
            leisureNews && leisureNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='Thể thao' />
          {
            sportNews && sportNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>
      </Row>

      <Row>

        <Col>
          <Title title='Sức khỏe' />
          {
            healthNews && healthNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='Công nghệ' />
          {
            techNews && techNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='Tâm sự' />
          {
            confideNews && confideNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>
      </Row>

      <Row>

        <Col>
          <Title title='Xe 360' />
          {
            carNews && carNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='Giáo dục' />
          {
            educationNews && educationNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>

        <Col>
          <Title title='SuperInfo' />
          {
            superInfoNews && superInfoNews.map((item, index) => {
              if (index === 0) return <VerticalNews item={item} key={index} />
              else return <HorizontalNews item={item} key={index} />
            })
          }
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
