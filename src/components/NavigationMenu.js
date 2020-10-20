import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEllipsisH, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { CONST } from "../const";

import './styles/NavigationMenu.css'


const NavigationItem = ({ children, cateId }) => {
  return (
    <Link to={`/${CONST.CATE_ROUTE[cateId]}`}
    >
      <div className='item-container item-container-title'> {children}</div>
    </Link>
  );
}

const DropdownMenu = () => {
  return (
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  )
}

const MainList = ({ mainCateList, setShowMainList }) => {
  return (
    <Row className='menu-container align-items-center justify-content-between' style={{ height: 40, marginBottom: 10 }}>
      <FontAwesomeIcon icon={faList} className='item-container item-icon' />
      {
        mainCateList && mainCateList.map((item, index) => (
          <NavigationItem cateId={item.cateId} key={index} >{item.name}</NavigationItem>
        ))
      }
      <FontAwesomeIcon icon={faEllipsisH} className='item-container item-icon' onClick={() => setShowMainList(false)} />
    </Row>
  );
}

const SubList = ({ subCateList, setShowMainList }) => {
  return (
    <Row className='menu-container align-items-center' style={{ height: 40 }}>
      <FontAwesomeIcon icon={faArrowLeft} className='item-container item-icon' onClick={() => setShowMainList(true)} />
      {
        subCateList && subCateList.map((item, index) => (
          <NavigationItem cateId={item.cateId} key={index} style={{ marginLeft: 20, marginRight: 40 }}>{item.name}</NavigationItem>
        ))
      }
    </Row>
  )
}

const NavigationMenu = ({ mainCateList, subCateList }) => {

  const [showMainList, setShowMainList] = useState(true);

  return (
    <Container className="navigation-menu" style={{ position: 'relative' }}>
      <DropdownMenu className="dropdown-menu" />
      {
        showMainList
          ? <MainList mainCateList={mainCateList} setShowMainList={setShowMainList} />
          : <SubList subCateList={subCateList} setShowMainList={setShowMainList} />
      }

      <div className="dropdown-content">
        test
        </div>

    </Container >
  );
};

export default NavigationMenu;
