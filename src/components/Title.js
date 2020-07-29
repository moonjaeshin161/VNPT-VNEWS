import React from "react";
import { Row, Container } from "react-bootstrap";
import IconTitle from "../assets/images/icon_title.svg";
import { CONST } from "../const";

const Title = ({ title }) => {
  return (
    <Container>
      <Row className='align-items-center mb-2'>
        <img src={IconTitle} alt="icon title" width={40} height={40} />
        <div style={{ fontSize: 20, color: CONST.color.blue, }} className='font-weight-bold'>{title}</div>
      </Row>
    </Container>
  );
};

export default Title;
