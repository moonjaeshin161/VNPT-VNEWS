import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

const Cards = () => {
  return (
    <Container>
      <Col>
        <Row>
          <Card>
            <img
              className="card-img-top"
              src="https://picsum.photos/300/300"
              alt="news"
            />

            <div className="card-block">
              <h4 className="card-title">Tawshif Ahsan Khan</h4>
            </div>

            <div className="card-footer">
              <span className="float-right">Joined in 2013</span>
              <span>
                <i className=""></i>75 Friends
              </span>
            </div>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default Cards;
