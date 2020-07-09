import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import MainCarousel from "./components/MainCarousel";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <NavigationMenu />

      <Row className="main-content">
        <Col lg={8}>
          <MainCarousel />
        </Col>
        <Col lg={4}>Test</Col>
      </Row>
    </Container>
  );
}

export default App;
