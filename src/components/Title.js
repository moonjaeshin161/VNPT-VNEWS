import React from "react";
import { Row, Container } from "react-bootstrap";
import IconTitle from "../assets/images/icon_title.svg";

const Title = ({ title }) => {
  return (
    <Container>
      <Row>
        <img src={IconTitle} alt="icon title" width={40} height={40} />
        <p>{title}</p>
      </Row>
    </Container>
  );
};

export default Title;
