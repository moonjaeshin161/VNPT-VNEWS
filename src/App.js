import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import { Container } from "react-bootstrap";

import Homepage from "./views/Homepage";
import { API } from "./services/APIs";
import { httpService } from "./services/httpService";
import './App.css'

const App = () => {

  const [mainCateList, setMainCateList] = useState([]);
  const [subCateList, setSubCateList] = useState([]);

  useEffect(() => {
    getCateList();
  }, []);

  const getCateList = async () => {
    const params = 'page=1&pageSize=50&orderType=1';
    const response = await httpService.postWithParams(API.GET_CATE_LIST + `?${params}`, params);
    if (response.data.length > 10) {
      setMainCateList(response.data.slice(0, 10));
      setSubCateList(response.data.slice(10, response.data.length + 1));
    }
  }
  return (
    <Container>
      <Header />
      <NavigationMenu
        className='navigation-menu'
        mainCateList={mainCateList}
        subCateList={subCateList} />
      <Homepage />
    </Container>
  );
}

export default App;
