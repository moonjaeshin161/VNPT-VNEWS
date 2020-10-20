
import React from "react";
import {
  Row,
} from "react-bootstrap";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/images/vnews_logo.svg";

import SearchBar from "./SearchBar";
import './styles/Header.css'

const Header = () => {
  return (
    <Row className='header-container pt-2 pb-2 ml-0' >
      <FontAwesomeIcon icon={faList} className='menu-icon-item' style={{ display: 'none' }} />
      <a href='/'>
        <img src={Logo} width='100' alt="vnews" />
      </a>
      <SearchBar className="search-item" />
    </Row>
  );
};

export default Header;
