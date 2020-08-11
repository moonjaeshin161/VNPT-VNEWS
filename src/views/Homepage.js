import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { CONST } from "../const";

import Title from "../components/Title";
import MainCarousel from "../components/MainCarousel";
import VerticalNews from "../components/VerticalNews";
import HorizontalNews from "../components/HorizontalNews";
import { httpService } from "../services/httpService";

const Homepage = () => {

  const [trendingNews, setTrendingNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [socialNews, setSocialNews] = useState([]);
  const [economicNews, setEconomicNews] = useState([]);
  const [lifestyleNews, setLifestyleNews] = useState([]);
  const [videoNews, setVideoNews] = useState([]);
  const [imageNews, setImageNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [leisureNews, setLeisureNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [confideNews, setConfideNews] = useState([]);
  const [carNews, setCarNews] = useState([]);
  const [educationNews, setEducationNews] = useState([]);
  const [superInfoNews, setSuperInfoNews] = useState([]);

  useEffect(() => {
    getTrendingNews();
    getLatestNews();
    getNewsByCate();
  }, []);

  const getTrendingNews = async () => {
    const response = await httpService.getTrendingNews();
    await setTrendingNews(response.data);
  }

  const getLatestNews = async () => {
    const response = await httpService.getLatestNews();
    await setLatestNews(response.data);
  }

  const getNewsByCate = async () => {
    const [
      socialResponse,
      economyResponse,
      lifestyleResponse,
      videoResponse,
      imageResponse,
      worldResponse,
      leisureResponse,
      sportResponse,
      healthResponse,
      techResponse,
      confideResponse,
      carResponse,
      educationResponse,
      superInfoResponse
    ] = await Promise.all([
      httpService.getNewsByCate(CONST.CATE_ID.XA_HOI),
      httpService.getNewsByCate(CONST.CATE_ID.KINH_TE),
      httpService.getNewsByCate(CONST.CATE_ID.DOI_SONG),
      httpService.getNewsByCate(CONST.CATE_ID.VIDEO),
      httpService.getNewsByCate(CONST.CATE_ID.TIN_ANH),
      httpService.getNewsByCate(CONST.CATE_ID.THE_GIOI),
      httpService.getNewsByCate(CONST.CATE_ID.GIAI_TRI),
      httpService.getNewsByCate(CONST.CATE_ID.THE_THAO),
      httpService.getNewsByCate(CONST.CATE_ID.SUC_KHOE),
      httpService.getNewsByCate(CONST.CATE_ID.CONG_NGHE),
      httpService.getNewsByCate(CONST.CATE_ID.TAM_SU),
      httpService.getNewsByCate(CONST.CATE_ID.XE_360),
      httpService.getNewsByCate(CONST.CATE_ID.GIAO_DUC),
      httpService.getNewsByCate(CONST.CATE_ID.SUPER_INFO)
    ]);

    await Promise.all([
      setSocialNews(socialResponse.data),
      setEconomicNews(economyResponse.data),
      setLifestyleNews(lifestyleResponse.data),
      setVideoNews(videoResponse.data),
      setImageNews(imageResponse.data),
      setWorldNews(worldResponse.data),
      setLeisureNews(leisureResponse.data),
      setSportNews(sportResponse.data),
      setHealthNews(healthResponse.data),
      setTechNews(techResponse.data),
      setConfideNews(confideResponse.data),
      setCarNews(carResponse.data),
      setEducationNews(educationResponse.data),
      setSuperInfoNews(superInfoResponse.data),
    ]);
  }

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
