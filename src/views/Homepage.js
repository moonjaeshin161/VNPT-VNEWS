import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { CONST } from "../const";

import MainCarousel from "../components/MainCarousel";

import { httpService } from "../services/httpService";
import { NewsItem } from "../components/NewsItem";
import { MediaNews } from "../components/MediaNews";

const Homepage = () => {

  const [trendingNews, setTrendingNews] = useState([]);
  const [carouselNews, setCarouselNews] = useState([]);
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
    getNews();
  }, []);

  const getNews = async () => {
    const [
      trendingResponse,
      latestResponse,
      carouselResponse,
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
      httpService.getTrendingNews(),
      httpService.getLatestNews(),
      httpService.getCarouselNews(),
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

    setTrendingNews(trendingResponse.data);
    setLatestNews(latestResponse.data);
    setCarouselNews(carouselResponse.data);
    setSocialNews(socialResponse.data);
    setEconomicNews(economyResponse.data);
    setLifestyleNews(lifestyleResponse.data);
    setVideoNews(videoResponse.data);
    setImageNews(imageResponse.data);
    setWorldNews(worldResponse.data);
    setLeisureNews(leisureResponse.data);
    setSportNews(sportResponse.data);
    setHealthNews(healthResponse.data);
    setTechNews(techResponse.data);
    setConfideNews(confideResponse.data);
    setCarNews(carResponse.data);
    setEducationNews(educationResponse.data);
    setSuperInfoNews(superInfoResponse.data);
  }

  return (
    <>
      <Row className="main-content">

        <Col lg={8}>
          <MainCarousel news={carouselNews} />
          <NewsItem news={trendingNews} direction='horizontal' title='Xu hướng' />
          <NewsItem news={latestNews} direction='horizontal' title='Mới nhất' />
          <NewsItem news={socialNews} direction='horizontal' title='Xã hội' />
          <NewsItem news={economicNews} direction='horizontal' title='Kinh tế' />
          <NewsItem news={lifestyleNews} direction='horizontal' title='Đời sống' />
        </Col>

        <Col lg={4}>
          <MediaNews type='video' title='Tin Video' news={videoNews} />
          <MediaNews type='image' title='Tin Ảnh' news={imageNews} />
        </Col>
      </Row>

      <Row>
        <Col lg={4}><NewsItem title='Thế giới' news={worldNews} direction='vertical' /></Col>
        <Col lg={4}><NewsItem title='Giải trí' news={leisureNews} direction='vertical' /></Col>
        <Col lg={4}><NewsItem title='Thể thao' news={sportNews} direction='vertical' /></Col>
      </Row>

      <Row>
        <Col lg={4}><NewsItem title='Sức khỏe' news={healthNews} direction='vertical' /></Col>
        <Col lg={4}><NewsItem title='Công nghệ' news={techNews} direction='vertical' /></Col>
        <Col lg={4}><NewsItem title='Tâm sự' news={confideNews} direction='vertical' /></Col>
      </Row>

      <Row>
        <Col lg={4}><NewsItem title='Xe 360' news={carNews} direction='vertical' /></Col>
        <Col lg={4}> <NewsItem title='Giáo dục' news={educationNews} direction='vertical' /></Col>
        <Col lg={4}><NewsItem title='SuperInfo' news={superInfoNews} direction='vertical' /></Col>
      </Row>
    </>
  );
};

export default Homepage;
