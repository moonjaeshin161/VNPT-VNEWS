import React from "react";
import {
  Row,
} from "react-bootstrap";

import Logo from "../assets/images/vnews_logo.svg";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Row className='pt-2 pb-2 justify-content-between' >
      <img src={Logo} width='100' alt="vnews" />
      <SearchBar />
    </Row>
  );
};

export default Header;
