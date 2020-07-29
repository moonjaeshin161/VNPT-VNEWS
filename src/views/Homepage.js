import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Title from "../components/Title";
import Cards from "../components/Cards";
import MainCarousel from "../components/MainCarousel";

const Homepage = () => {

  return (
    <Row className="main-content">
      <Col lg={8}>
        <MainCarousel />
      </Col>
      <Col lg={4}>
        <section>
          <Title title="Tin Video" />
          <Cards />
        </section>

        <section>
          <Title title="Tin Ảnh" />
          <Container>
            <Card>
              <img src="https://picsum.photos/300/300" alt="news" />
            </Card>
          </Container>
        </section>
      </Col>
    </Row>
  );
};

export default Homepage;
