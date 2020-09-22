import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import Homepage from "./views/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import CategoryPage from "./views/CategoryPage";

import { httpService } from "./services/httpService";
import DetailsPage from "./views/DetailsPage";

const App = () => {

  const [mainCateList, setMainCateList] = useState([]);
  const [subCateList, setSubCateList] = useState([]);

  useEffect(() => {
    getCateList();
  }, []);

  const getCateList = async () => {
    const response = await httpService.getCatelist();
    if (response.data.length > 10) {
      setMainCateList(response.data.slice(0, 10));
      setSubCateList(response.data.slice(10, response.data.length + 1));
    }
  }

  return (
    <Router>
      <Container>
        <Header />

        <NavigationMenu
          className='navigation-menu'
          mainCateList={mainCateList}
          subCateList={subCateList}
        />
        <Switch>
          <Route exact path='/' >
            <Homepage />
          </Route>
          <Route exact path='/:cate'>
            <CategoryPage />
          </Route>
          <Route exact path='/news/news/:id'>
            <DetailsPage />
          </Route>
          <Route exact path='/:cate/:newsId'>
            <DetailsPage />
          </Route>
        </Switch>

      </Container>
      <Footer />
    </Router >
  );
}

export default App;
