import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <Container>
      <Col>
        <Row >
          <img
            style={{ borderRadius: 15 }}
            width='320'
            height='200'
            src="https://picsum.photos/350/200"
            alt="news"
            className='mb-3'
          />
        </Row>
        <Row>
          <div className='font-weight-bold' style={{ fontSize: 18 }}>Test</div>
        </Row>
        <Row style={{ height: 40 }} className="align-items-center justify-content-between">
          <div style={{ fontSize: 12 }} >Báo bóng đá</div>
          <div style={{ fontSize: 12 }} >48 phút trước</div>
          <div style={{ fontSize: 12 }} >Icon</div>

        </Row>
      </Col>
    </Container>
  );
};

export default Cards;
