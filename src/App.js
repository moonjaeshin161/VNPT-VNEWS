import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "./App.css";

import Homepage from "./views/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";

import { httpService } from "./services/httpService";
import { CONST } from "./const";

const App = () => {

  const [mainCateList, setMainCateList] = useState([]);
  const [subCateList, setSubCateList] = useState([]);
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
    getCateList();
    getTrendingNews();
    getLatestNews();
    getNewsByCate();
  }, []);

  const getCateList = async () => {
    const response = await httpService.getCatelist();
    if (response.data.length > 10) {
      setMainCateList(response.data.slice(0, 10));
      setSubCateList(response.data.slice(10, response.data.length + 1));
    }
  }

  const getTrendingNews = async () => {
    const response = await httpService.getTrendingNews();
    await setTrendingNews(response.data);
  }

  const getLatestNews = async () => {
    const response = await httpService.getLatestNews();
    await setLatestNews(response.data);
  }

  const getNewsByCate = async () => {
    const socialResponse = await httpService.getNewsByCate(CONST.CATE_ID.XA_HOI);
    const economyResponse = await httpService.getNewsByCate(CONST.CATE_ID.KINH_TE);
    const lifestyleResponse = await httpService.getNewsByCate(CONST.CATE_ID.DOI_SONG);
    const videoResponse = await httpService.getNewsByCate(CONST.CATE_ID.VIDEO);
    const imageResponse = await httpService.getNewsByCate(CONST.CATE_ID.TIN_ANH);
    const worldResponse = await httpService.getNewsByCate(CONST.CATE_ID.THE_GIOI);
    const leisureResponse = await httpService.getNewsByCate(CONST.CATE_ID.GIAI_TRI);
    const sportResponse = await httpService.getNewsByCate(CONST.CATE_ID.THE_THAO);
    const healthResponse = await httpService.getNewsByCate(CONST.CATE_ID.SUC_KHOE);
    const techResponse = await httpService.getNewsByCate(CONST.CATE_ID.CONG_NGHE);
    const confideResponse = await httpService.getNewsByCate(CONST.CATE_ID.TAM_SU);
    const carResponse = await httpService.getNewsByCate(CONST.CATE_ID.XE_360);
    const educationResponse = await httpService.getNewsByCate(CONST.CATE_ID.GIAO_DUC);
    const superInfoResponse = await httpService.getNewsByCate(CONST.CATE_ID.SUPER_INFO);
    await setSocialNews(socialResponse.data);
    await setEconomicNews(economyResponse.data);
    await setLifestyleNews(lifestyleResponse.data);
    await setVideoNews(videoResponse.data);
    await setImageNews(imageResponse.data);
    await setWorldNews(worldResponse.data);
    await setLeisureNews(leisureResponse.data);
    await setSportNews(sportResponse.data);
    await setHealthNews(healthResponse.data);
    await setTechNews(techResponse.data);
    await setConfideNews(confideResponse.data);
    await setCarNews(carResponse.data);
    await setEducationNews(educationResponse.data);
    await setSuperInfoNews(superInfoResponse.data);

  }

  return (
    <>
      <Container>
        <Header />
        <NavigationMenu
          className='navigation-menu'
          mainCateList={mainCateList}
          subCateList={subCateList} />
        <Homepage
          trendingNews={trendingNews}
          latestNews={latestNews}
          socialNews={socialNews}
          economicNews={economicNews}
          lifestyleNews={lifestyleNews}
          videoNews={videoNews}
          imageNews={imageNews}
          worldNews={worldNews}
          leisureNews={leisureNews}
          sportNews={sportNews}
          healthNews={healthNews}
          techNews={techNews}
          confideNews={confideNews}
          carNews={carNews}
          educationNews={educationNews}
          superInfoNews={superInfoNews}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
